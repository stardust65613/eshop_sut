# HW04 – AUTOMATION TESTING

## THÔNG TIN SINH VIÊN
**Họ và tên:** Nguyễn Hải Đăng
**Mã số sinh viên:** 23120027


# 1. GIỚI THIỆU

## 1.1. Hệ thống kiểm thử

- **SUT:** EShop.
- **Repository:** https://github.com/stardust65613/eshop_sut.git
- **Framework:** Playwright.
- **Test Reporter:** Playwright HTML Reporter.

## 1.3. Phạm vi kiểm thử

| STT | Pool | Feature ID | Tên chức năng |
|---|---|---|---|
| 1 | Pool A | FR-03 | Forgot password and password reset |
| 2 | Pool B | FR-08 | Checkout |
| 3 | Pool C | FR-14 | Category management (CRUD) |

# 2. MÔI TRƯỜNG KIỂM THỬ

| Thành phần | Thông tin |
|---|---|
| Operating System | [Windows 11] |
| Node.js | 24.12.0 |
| Playwright | 1.65.1 |
| Language | TypeScript |
| Browsers | Chromium, Firefox, WebKit |

# 3. TRIỂN KHAI AUTOMATION TESTING

## 3.1. Quy trình thực hiện

1. Dùng AI thiết kế dữ liệu kiểm thử.
2. Sử dụng AI hỗ trợ xây dựng automation script.
3. Kiểm tra và chỉnh sửa mã nguồn do AI tạo ra.
4. Thực thi kiểm thử trên ba trình duyệt.
5. Phân tích kết quả và tạo báo cáo.

## 3.2. Feature A – Forgot password and password reset

### a. Phạm vi kiểm thử

Kiểm tra tính năng quên mật khẩu và đặt lại mật khẩu.

### b. Test Data và Automation Script

| Thành phần | Tên file |
|---|---|
| Test Data | [forgot-password.json] |
| Automation Script | [forgot-password.spec.ts] |

- Tổng số test case: 20.
- Positive test cases: 2.
- Negative test cases: 10.
- Edge test cases: 8.

- Assertion Patterns: toHaveAttribute(), toBeVisible(), toHaveCount(), toContainText(), toHaveURL(), toBeTruthy().

### c. Kết quả thực thi

| Browser | Total | Passed | Failed | Skipped |
|---|---:|---:|---:|---:|
| Chromium | 20 | 13 | 7 | 0 |
| Firefox | 20 | 12 | 8 | 0 |
| WebKit | 20 | 13 | 7 | 0 |

**HTML Reports:** trong thư mục test-report/FR03-forgot-password.

## 3.3. Feature B – Checkout

### a. Phạm vi kiểm thử

Kiểm tra tính năng thanh toán.

### b. Test Data và Automation Script

| Thành phần | Tên file |
|---|---|
| Test Data | [checkout.json] |
| Automation Script | [checkout.spec.ts] |

- Tổng số test case: 13.
- Positive test cases: 2.
- Negative test cases: 5.
- Edge test cases: 6.

- Assertion Patterns: toHaveURL(), toBeVisible(), toBeEnabled(), toContainText(), toHaveValue(), toBeTruthy(), toBe(), toHaveText(), toBeGreaterThanOrEqual(), toHaveCount(), toContain().

### c. Kết quả thực thi

| Browser | Total | Passed | Failed | Skipped |
|---|---:|---:|---:|---:|
| Chromium | 13 | 2 | 11 | 0 |
| Firefox | 13 | 2 | 11 | 0 |
| WebKit | 13 | 2 | 11 | 0 |

**HTML Reports:** trong thư mục test-report/FR08-checkout

## 3.4. Feature C - Category management (CRUD) 

### a. Phạm vi kiểm thử

Kiểm tra tính năng thanh toán.

### b. Test Data và Automation Script

| Thành phần | Tên file |
|---|---|
| Test Data | [category-management.json] |
| Automation Script | [category-management.spec.ts] |

- Tổng số test case: 14.
- Positive test cases: 6.
- Negative test cases: 3.
- Edge test cases: 5.

- Assertion Patterns: toBeVisible(), toContainText(), toHaveCount(), not.toBeVisible(), toBe().

### c. Kết quả thực thi

| Browser | Total | Passed | Failed | Skipped |
|---|---:|---:|---:|---:|
| Chromium | 14 | 10 | 4 | 0 |
| Firefox | 14 | 9 | 5 | 0 |
| WebKit | 14 | 9 | 5 | 0 |

**HTML Reports:** trong thư mục test-report/FR14-category-management

# 4. TỔNG HỢP KẾT QUẢ KIỂM THỬ

## 4.1. Thống kê kết quả

| Feature | Browser Runs | Total Tests | Passed | Failed | Skipped |
|---|---:|---:|---:|---:|---:|
| Feature A | 3 | 60 | 38 | 22 | 0 |
| Feature B | 3 | 39 | 6 | 33 | 0 |
| Feature C | 3 | 42 | 28 | 14 | 0 |
| **Tổng** | **9** | 141 | 72 | 69 | 0 |

## 4.2. Bug Report

Được trình bày trong file bug_report.pdf

# 5. Đánh giá AI

Tạo playwright test: Chưa hoàn thiện. Còn sai ở bước load data vào test:
Phải sửa từ

```TypeScript
const dataPath = path.join(__dirname, 'forgot-password.json');
```

thành 

```TypeScript
const dataPath = path.join(__dirname, '../test-data/forgot-password.json');
```

Nguyên nhân: AI chỉ nhận yêu cầu tạo data và viết test. AI không có thông tin gì về môi trường chạy nên đưa ra cấu hình không đúng. 

Sửa 

```TypeScript
await otpInput.fill('9999');
```
thành

```TypeScript
const wrongOtp = displayedOtp === '9999' ? '8888' : '9999';
await otpInput.fill(wrongOtp);
```

AI fix cứng OTP sai là 9999 dù 9999 là OTP đại diện cho OTP sai. Nguyên nhân là chưa cung cấp thông tin 9999 là OTP sai mẫu không phải luôn là OTP sai


sửa 

```TypeScript
const emailInput = page.getByRole('textbox', { name: /nhập email của bạn/i });
```
thành


```TypeScript
const emailInput = page.locator('input[required]').first(); 
```

Dòng chữ "Nhập email của bạn" không thuộc input textbox mà thuộc label nên playwright sẽ không tìm được. Do đó đổi thành locator input first vì chỉ có 1 ô input duy nhất ở trang này.  
Ô nhập OTP cũng lỗi tương tự. Nên chúng ta sửa 

```TypeScript
const otpInput = page.getByRole('textbox', { name: /mã otp/i });
```
thành


```TypeScript
const otpInput = page.locator('input[required]').first();
```

Vì otpInput là input đầu tiên của trang này. Tương tự cho password chúng ta sửa 


```TypeScript
const passwordInput = page.getByRole('textbox', { name: /mật khẩu mới/i });
```
thành


```TypeScript
const passwordInput = page.locator('input[type="password"]');
```
Đổi locator đúng với trong code. Thêm await expect(otpContainer).toHaveCount(0); vào nhánh step2=null để kiểm tra có nhảy sang trang step 2 ko. Nếu có qua step 2 thì ô chứa mã OTP sẽ hiện ra và expect trả ra lỗi. 

```TypeScript
// Xử lý các test case dừng lại ở Bước 1 (email lỗi, để trống, không tồn tại...)
      if (tc.step2Action === null) {
        if (tc.email === '') {
          // Kiểm tra HTML5 validation constraint khi để trống email (Assertion kiểu 1: toHaveAttribute)
          await expect(emailInput).toHaveAttribute('required', '');
        } else {
          // Kiểm tra hệ thống không chuyển sang màn hình 2 (vẫn hiển thị nút Lấy mã OTP) (Assertion kiểu 2: toBeVisible)
          await expect(getOtpButton).toBeVisible();
          await expect(otpContainer).toHaveCount(0);
        }
        return;
      }
```

Ngoài ra bổ sung cơ chế chờ API phản hồi để tránh kiểm tra giao diện quá sớm. Thay

```TypeScript
await getOtpButton.click();

const otpContainer = page.locator('.bg-green-100');
```
thành


```TypeScript
const otpContainer = page.locator('.bg-green-100');

if (tc.email === '') {
  await getOtpButton.click();
} else {
  const responsePromise = page.waitForResponse(response =>
  response.url().includes('/api/forgot-password') &&
  response.request().method() === 'POST'
);

  await getOtpButton.click();
  await responsePromise;
}
```

Cách thay này áp dụng cho test case có gửi request để nhận mã otp, bỏ qua email rỗng. Tránh kiểm tra quá sớm khi OTP container chưa kịp render dẫn đến đánh giá sai lệch. 

-----
### Checkout

Tạo playwright test: Chưa hoàn thiện. Còn sai ở bước load data vào test:
Phải sửa từ

```TypeScript
const dataFilePath = path.resolve(__dirname, 'data', 'checkout.json');
```

thành 

```TypeScript
const dataFilePath = path.resolve(__dirname, '../test-data/checkout.json');
```

Nguyên nhân: AI chỉ nhận yêu cầu viết lại test. AI không có thông tin gì về môi trường chạy nên đưa ra cấu hình không đúng. 

- Lỗi ở login
```TypeScript
const usernameInput = page
    .locator('div')
    .filter({
      has: page.getByText('Username', { exact: true })
    })
    .getByRole('textbox');

  const passwordInput = page
    .locator('div')
    .filter({
      has: page.getByText('Mật khẩu', { exact: true })
    })
    .getByRole('textbox');
```

Ở đây code chọn <div> chứa username nhưng selector này khớp với nhiều div lồng nhau. Kết quả là getByRole('textbox') tìm thấy cả 2 input (Username và Mật khẩu), gây lỗi strict mode. Cho nên sửa thành

```TypeScript
const usernameInput = page.locator('input[required]').nth(0);
const passwordInput = page.locator('input[required]').nth(1);
```

AI đưa ra code chưa phù hợp vì được yêu cầu sửa test nên không biết về code nên chọn sai selector. 

Bỏ helper

```TypeScript
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
```

Vì backend không trả data khi hoàn thành request, nó trả về orderId nên request đến orderId để lấy total_amount. Nguyên nhân AI không coe đúng là vì AI không biết cấu trúc response của backend. 

Do đó, chúng ta đổi

```TypeScript

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
```

thành 

```TypeScript

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

  const orderResponse = await page.request.get(
    `http://localhost:3000/api/orders/${responseBody.orderId}`
  );

  const order = await orderResponse.json();
  expect(Number(order.total_amount)).toBe(expected.total);

  await expect(
    page.getByRole('heading', {
      name: expected.heading
    })
  ).toHaveText(expected.heading);
}
```

để kiểm tra số tiền backend dùng. 

### Category management
Tạo playwright test: Chưa hoàn thiện. Còn sai ở bước load data vào test:
Phải sửa từ



```TypeScript
const dataPath = path.join(__dirname, 'category-management.json');
```

thành 

```TypeScript
const dataPath = path.join(__dirname, '../test-data/category-management.json');
```

Sửa 


```TypeScript
await page.getByRole('listitem', { name: 'Danh mục' }).click();
```

thành 

```TypeScript
await page.getByText('Danh mục', { exact: true }).click();
```

vì getByRole không tìm thấy được Danh mục khi chạy. và thêm kiểm tra việc tạo danh mục với 10000 ký tự 
```TypeScript
        if (tc.expectedType === 'success') {
          // Assertion 2 (Kiểu 2 - toContainText): Xác thực tên danh mục xuất hiện trong bảng danh sách
          const categoryRow = page.getByRole('row', { name: new RegExp(escapeRegExp(tc.categoryName), 'i') });
          await expect(categoryRow).toBeVisible();
          await expect(categoryRow).toContainText(tc.categoryName);
        } 
        else if (tc.expectedType === 'graceful_handling') {
          // Assertion 4: Kiểm tra hệ thống xử lý chuỗi cực lớn mà không bị crash giao diện (vẫn hiển thị form/table)
          await expect(page.getByRole('button', { name: 'Thêm mới' })).toBeVisible();
        }
```

thành

```TypeScript
        if (tc.expectedType === 'success') {
          // Assertion 2 (Kiểu 2 - toContainText): Xác thực tên danh mục xuất hiện trong bảng danh sách
          const categoryRow = page.getByRole('row', { name: new RegExp(escapeRegExp(tc.categoryName), 'i') });
          await expect(categoryRow.last()).toBeVisible();
          await expect(categoryRow.last()).toContainText(tc.categoryName);
        } 

        else if (tc.expectedType === 'graceful_handling') {
          // Assertion 4: Kiểm tra hệ thống xử lý chuỗi cực lớn mà không bị crash giao diện (vẫn hiển thị form/table)
          await expect(page.getByRole('button', { name: 'Thêm mới' })).toBeVisible();

          const categoryRow = page.getByRole('row', {
            name: new RegExp(`A{10000}`)
          });

          await expect(categoryRow.last()).toBeVisible();
          await expect(categoryRow.last()).toContainText('A'.repeat(10000));
        }
```

Và sửa 
```TypeScript
  const categoryRow = page.getByRole('row', { name: new RegExp(tc.categoryName, 'i') });
```

thành
```TypeScript
  const categoryRow = page.getByRole('row', { name: new RegExp(escapeRegExp(tc.categoryName), 'i') });
```
để tránh danh mục có tên tương tự. Dùng escapeRegExp() để xử lý an toàn các ký tự đặc biệt trong dữ liệu. Các locator tìm trong list danh mục ở delete tương tự cũng thêm last để lấy phần tử đầu khi bị trùng.

```TypeScript
const row = page.getByRole('row', { name: new RegExp(escapeRegExp(targetName), 'i') }).last();
```

Sửa
```TypeScript
        if (tc.action === 'browser_back') {
          await page.goBack();
          // Assertion 1 (Kiểu 1 - toBeVisible / toHaveURL): Xác thực quay về trang trước, không lưu danh mục
          await expect(page).toHaveURL(/login|dashboard/);
          return;
        }
```
thành
```TypeScript
        if (tc.action === 'browser_back') {
          await page.getByText('Dashboard', { exact: true }).click();

          await expect(
            page.getByRole('heading', { name: 'Dashboard' })
          ).toBeVisible();

          // Quay lại tab Danh mục
          await page.getByText('Danh mục', { exact: true }).click();

          await expect(
            page.getByRole('heading', { name: 'Quản lý Danh mục' })
          ).toBeVisible();

          const categoryRow = page.getByRole('row').filter({
            has: page.getByRole('cell', {
              name: new RegExp(`^${escapeRegExp(tc.categoryName)}$`, 'i')
            })
          });

          await expect(categoryRow).toHaveCount(0);

          return;
        }
```

Vì trang admin hoạt động trên 1 trang không có điều hướng nên back là thoát trang. AI đưa ra test sai vì test case đưa cho AI đã sai phần steps. Và sửa

```TypeScript
await expect(inputField).toHaveAttribute('required', '');
```
thành

```TypeScript
        const categoryRows = page.getByRole('row').filter({
          has: page.getByRole('button', { name: 'Xóa' })
        });

        const countBefore = await categoryRows.count();

        await page.getByRole('button', { name: 'Thêm mới' }).click();

        else if (tc.expectedType === 'validation_error') {
          await page.waitForTimeout(1000);
          await expect(categoryRows).toHaveCount(countBefore);
        }
```
Vì ô input không có thuộc tính require. Nên đếm số danh mục để xem nếu tên danh mục trống hoặc rỗng có được thêm không. 

Thêm kiểm tra request chứ không chỉ kiểm tra giao diện

```TypeScript
        else if (tc.expectedType === 'delete_error_500') {
          // Assertion (Kiểu 6 - toBeVisible): Danh mục chứa sản phẩm bị từ chối xóa, vẫn được giữ nguyên trên giao diện
          const deleteResponse = page.waitForResponse(response =>
            response.request().method() === 'DELETE' &&
            response.url().includes('/api/categories/')
          );

          await row.getByRole('button', { name: 'Xóa' }).click();
          const response = await deleteResponse;

          expect(response.status()).toBe(500);

          // Danh mục vẫn được giữ nguyên trên giao diện
          await expect(row).toBeVisible();
        }
```
Sửa Data trong test case TC_DEL_CAT_01 thành Phụ kiện. Dữ liệu có sẵn là Phụ kiện không phải phụ kiện cũ. Sửa test case TC_ADD_CAT_01 data thành Quần Áo thay cho Điện thoại vì có sẵn danh mục điện thoại.

# 6. GITHUB REPOSITORY VÀ COMMIT HISTORY

- **GitHub Repository:** https://github.com/stardust65613/eshop_sut.git 
- **Commit Log:** git-commit-log.txt
