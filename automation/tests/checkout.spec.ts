
import { test, expect, Page, Locator } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// ============================================================
// 1. LOAD TEST DATA
// ============================================================

const dataFilePath = path.resolve(__dirname, '../test-data/checkout.json');
const rawData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

const { config, test_data: testData } = rawData;

// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================

/**
 * Lấy locator ô nhập tổng tiền.
 */
function getTotalAmountInput(page: Page): Locator {
  return page
    .locator('div')
    .filter({
      has: page.getByText('Tổng tiền thanh toán (VND):', {
        exact: true
      })
    })
    .getByRole('spinbutton');
}

/**
 * Trích xuất tổng tiền từ Backend response.
 */
function extractBackendTotal(body: any): number {
  const rawTotal =
    body?.order?.total_amount ??
    body?.total_amount ??
    body?.data?.total_amount;

  return Number(rawTotal);
}

/**
 * Chuẩn bị trạng thái ban đầu cho Checkout.
 */
async function prepareCheckout(page: Page): Promise<void> {
  await page.goto(`${config.baseUrl}/login`);

  const usernameInput = page.locator('input[required]').nth(0);
  const passwordInput = page.locator('input[required]').nth(1);

  await usernameInput.fill(config.credentials.email);
  await passwordInput.fill(config.credentials.password);

  await page.getByRole('button', {
    name: 'Sign In'
  }).click();

  await expect(page).toHaveURL(`${config.baseUrl}/`);

  // Thêm sản phẩm vào giỏ hàng.
  for (const item of config.cart_items) {
    const productCard = page
      .locator('div.border.rounded')
      .filter({
        has: page.getByRole('heading', {
          name: item.name,
          exact: true
        })
      });

    const addToCartButton = productCard.getByRole('button', {
      name: 'Thêm vào giỏ'
    });

    for (let i = 0; i < item.quantity; i++) {
      await addToCartButton.click();
    }
  }

  // Truy cập giỏ hàng.
  await page.getByRole('link', {
    name: 'Giỏ hàng'
  }).click();

  await expect(page).toHaveURL(`${config.baseUrl}/cart`);

  await expect(page.locator('body')).toContainText(
    config.expected_cart_total.toLocaleString()
  );

  // Truy cập Checkout.
  await page.getByRole('button', {
    name: 'Tiến hành thanh toán'
  }).click();

  await expect(page).toHaveURL(`${config.baseUrl}/checkout`);
}

/**
 * Chờ response API Checkout.
 */
function waitForCheckoutResponse(page: Page) {
  return page.waitForResponse(response =>
    response.url().includes('/api/checkout') &&
    response.request().method() === 'POST'
  );
}

// ============================================================
// 3. ACTION HANDLERS
// ============================================================

/**
 * Thanh toán thành công.
 */
async function submitSuccess(
  page: Page,
  expected: any
): Promise<void> {

  const responsePromise = waitForCheckoutResponse(page);

  await page.getByRole('button', {
    name: 'Xác Nhận Thanh Toán'
  }).click();

  const response = await responsePromise;

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(extractBackendTotal(responseBody)).toBe(expected.total);

  await expect(
    page.getByRole('heading', {
      name: expected.heading
    })
  ).toHaveText(expected.heading);
}

/**
 * Thanh toán thất bại.
 */
async function submitFailure(
  page: Page,
  expected: any
): Promise<void> {

  const dialogPromise = page.waitForEvent('dialog');
  const responsePromise = waitForCheckoutResponse(page);

  await page.getByRole('button', {
    name: 'Xác Nhận Thanh Toán'
  }).click();

  const response = await responsePromise;

  expect(response.status()).toBeGreaterThanOrEqual(
    expected.minStatus
  );

  const dialog = await dialogPromise;

  expect(dialog.message()).toContain(
    expected.dialogMessage
  );

  await dialog.accept();

  await expect(page).toHaveURL(
    `${config.baseUrl}${expected.url}`
  );
}

/**
 * Kiểm tra điều hướng Back của trình duyệt.
 */
async function browserBack(
  page: Page,
  expected: any
): Promise<void> {

  await page.goBack();

  await expect(page).toHaveURL(
    `${config.baseUrl}${expected.url}`
  );

  const cartRows = page.locator('table tbody tr');

  await expect(cartRows).toHaveCount(
    expected.cartItemCount
  );

  for (const item of config.cart_items) {
    await expect(page.locator('table tbody')).toContainText(
      item.name
    );
  }
}

/**
 * Kiểm tra input chỉ nhận giá trị số.
 */
async function validateNumericInput(
  page: Page,
  testCase: any,
  expected: any
): Promise<void> {

  const totalInput = getTotalAmountInput(page);

  await totalInput.clear();

  await totalInput.pressSequentially(
    String(testCase.editableTotal)
  );

  await expect(totalInput).toHaveValue(
    expected.inputValue
  );
}

// ============================================================
// 4. DATA-DRIVEN TEST SUITE
// ============================================================

test.describe('FR-08: Checkout Functionality Automation Suite', () => {

  test.beforeEach(async ({ page }) => {
    await prepareCheckout(page);
  });

  // Mỗi phần tử JSON tạo ra một automation test độc lập.
  for (const [testCaseId, testCase] of Object.entries<any>(testData)) {

    test(`${testCaseId}: ${testCase.description}`, async ({ page }) => {

      const totalInput = getTotalAmountInput(page);

      // Thực thi hành động dựa trên cấu hình JSON.
      switch (testCase.action) {

        case 'submit_default': {

          await expect(totalInput).toHaveValue(
            String(config.expected_cart_total)
          );

          await submitSuccess(page, testCase.expected);

          break;
        }

        case 'submit_success': {

          await totalInput.fill(
            String(testCase.editableTotal)
          );

          // Kiểm tra giá trị hiển thị nếu JSON có cấu hình.
          if (testCase.expected.inputValue !== undefined) {
            await expect(totalInput).toHaveValue(
              testCase.expected.inputValue
            );
          }

          await submitSuccess(page, testCase.expected);

          break;
        }

        case 'submit_failure': {

          await totalInput.fill(
            String(testCase.editableTotal)
          );

          await submitFailure(page, testCase.expected);

          break;
        }

        case 'browser_back': {

          await browserBack(page, testCase.expected);

          break;
        }

        case 'validate_numeric_input': {

          await validateNumericInput(
            page,
            testCase,
            testCase.expected
          );

          break;
        }

        default:

          throw new Error(
            `Unsupported action: ${testCase.action}`
          );
      }
    });
  }
});
