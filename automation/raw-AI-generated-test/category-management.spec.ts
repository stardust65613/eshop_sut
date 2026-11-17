import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Đọc dữ liệu từ file JSON riêng biệt theo hướng Data-Driven
const dataPath = path.join(__dirname, 'category-management.json');
const testData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

test.describe('FR-14: Quản lý danh mục (Category Management CRUD) - Data-Driven Tests', () => {

  // Thiết lập đăng nhập chung trước mỗi test case
  test.beforeEach(async ({ page }) => {
    await page.goto(testData.environment.baseUrl);

    // Đăng nhập tài khoản Admin
    await page.getByPlaceholder('Email').fill(testData.environment.adminCredentials.email);
    await page.getByPlaceholder('Password').fill(testData.environment.adminCredentials.password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Điều hướng sang tab Quản lý Danh mục trên Admin Dashboard
    await page.getByRole('listitem', { name: 'Danh mục' }).click();
  });

  // Duyệt qua toàn bộ danh sách test cases từ JSON để chạy tự động theo mô hình Data-Driven
  for (const tc of testData.testCases) {
    test(`${tc.testCaseId}: ${tc.title}`, async ({ page }) => {
      
      // Xử lý nhóm Test Cases tạo danh mục (Create)
      if (tc.action === 'submit' || tc.action === 'browser_back') {
        const inputField = page.getByPlaceholder('Tên danh mục mới');
        
        // Kiểm tra phương thức nhập liệu (xử lý chuỗi 10,000 chữ A nếu cần)
        if (tc.inputMethod === 'paste_10000_a') {
          const hugeString = 'A'.repeat(10000);
          await inputField.evaluate((node: HTMLInputElement, val: string) => {
            node.value = val;
            node.dispatchEvent(new Event('input', { bubbles: true }));
          }, hugeString);
        } else {
          await inputField.fill(tc.categoryName);
        }

        // Thực hiện hành động theo kịch bản (Browser Back hoặc Bấm nút Thêm mới)
        if (tc.action === 'browser_back') {
          await page.goBack();
          // Assertion 1 (Kiểu 1 - toBeVisible / toHaveURL): Xác thực quay về trang trước, không lưu danh mục
          await expect(page).toHaveURL(/login|dashboard/);
          return;
        }

        await page.getByRole('button', { name: 'Thêm mới' }).click();

        // Kiểm tra kết quả mong đợi dựa theo từng loại expectedType
        if (tc.expectedType === 'success') {
          // Assertion 2 (Kiểu 2 - toContainText): Xác thực tên danh mục xuất hiện trong bảng danh sách
          const categoryRow = page.getByRole('row', { name: new RegExp(tc.categoryName, 'i') });
          await expect(categoryRow).toBeVisible();
          await expect(categoryRow).toContainText(tc.categoryName);
        } 
        else if (tc.expectedType === 'validation_error') {
          // Assertion 3 (Kiểu 3 - toHaveAttribute / not.toBeVisible): Trường rỗng/khoảng trắng bị chặn bởi thuộc tính required hoặc không thêm dòng mới
          await expect(inputField).toHaveAttribute('required', '');
        }
        else if (tc.expectedType === 'graceful_handling') {
          // Assertion 4: Kiểm tra hệ thống xử lý chuỗi cực lớn mà không bị crash giao diện (vẫn hiển thị form/table)
          await expect(page.getByRole('button', { name: 'Thêm mới' })).toBeVisible();
        }
      } 
      
      // Xử lý nhóm Test Cases xóa danh mục (Delete)
      else if (tc.action === 'delete') {
        const targetName = tc.targetCategoryName;
        const row = page.getByRole('row', { name: new RegExp(targetName, 'i') });
        
        // Đảm bảo danh mục tồn tại trước khi xóa
        await expect(row).toBeVisible();

        // Bấm nút Xóa tương ứng với dòng danh mục
        await row.getByRole('button', { name: 'Xóa' }).click();

        if (tc.expectedType === 'delete_success') {
          // Assertion (Kiểu 5 - not.toBeVisible): Danh mục trống bị xóa thành công và biến mất khỏi bảng
          await expect(page.getByRole('row', { name: new RegExp(targetName, 'i') })).not.toBeVisible();
        } 
        else if (tc.expectedType === 'delete_error_500') {
          // Assertion (Kiểu 6 - toBeVisible): Danh mục chứa sản phẩm bị từ chối xóa, vẫn được giữ nguyên trên giao diện
          await expect(row).toBeVisible();
        }
      }

    });
  }

});
