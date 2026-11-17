import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Đọc dữ liệu từ file JSON bên ngoài (đảm bảo không hardcode test data trong script)
const dataPath = path.join(__dirname, '../test-data/forgot-password.json');
const testDataFile = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

test.describe('FR-03: Forgot Password & Password Reset Automation Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    // Điều hướng đến trang quên mật khẩu trước mỗi test case
    await page.goto('/forgot-password');
  });

  for (const tc of testDataFile.testCases) {
    test(`${tc.testCaseId}: ${tc.description}`, async ({ page }) => {
      // 1. Tương tác Bước 1: Nhập email và bấm Lấy mã OTP
      const emailInput = page.getByRole('textbox', { name: /nhập email của bạn/i });
      await emailInput.fill(tc.email);

      const getOtpButton = page.getByRole('button', { name: 'Lấy mã OTP' });
      await getOtpButton.click();

      // Xử lý các test case dừng lại ở Bước 1 (email lỗi, để trống, không tồn tại...)
      if (tc.step2Action === null) {
        if (tc.email === '') {
          // Kiểm tra HTML5 validation constraint khi để trống email (Assertion kiểu 1: toHaveAttribute)
          await expect(emailInput).toHaveAttribute('required', '');
        } else {
          // Kiểm tra hệ thống không chuyển sang màn hình 2 (vẫn hiển thị nút Lấy mã OTP) (Assertion kiểu 2: toBeVisible)
          await expect(getOtpButton).toBeVisible();
        }
        return;
      }

      // 2. Xử lý tại Bước 2 (Khi đã chuyển màn hình nhập OTP)
      const otpContainer = page.locator('.bg-green-100');
      // Assertion kiểu 3: toContainText kiểm tra khối hiển thị mã OTP động xuất hiện
      await expect(otpContainer).toContainText('Mã OTP của bạn là:');

      // Lấy mã OTP động hiển thị trên giao diện (ví dụ: "Mã OTP của bạn là: 4892" -> lấy số "4892")
      const otpText = await otpContainer.textContent();
      const match = otpText?.match(/\d+/);
      const displayedOtp = match ? match[0] : '1234';

      const otpInput = page.getByRole('textbox', { name: /mã otp/i });
      const passwordInput = page.getByRole('textbox', { name: /mật khẩu mới/i });
      const submitButton = page.getByRole('button', { name: 'Đặt lại mật khẩu' });

      // Xử lý giá trị OTP dựa trên otpBehavior từ test data
      if (tc.otpBehavior === 'leave_empty') {
        // Để trống OTP
        await otpInput.fill('');
      } else if (tc.otpBehavior === 'input_wrong_numeric') {
        // Nhập sai số (khác với OTP đang hiển thị)
        await otpInput.fill('9999');
      } else if (tc.otpBehavior === 'input_wrong_alphanumeric') {
        // Nhập chứa chữ/ký tự đặc biệt không khớp
        await otpInput.fill('abcd');
      } else if (tc.otpBehavior === 'input_1_char') {
        // Nhập đúng 1 ký tự
        await otpInput.fill(displayedOtp.charAt(0));
      } else {
        // Dùng đúng OTP hiển thị động trên UI
        await otpInput.fill(displayedOtp);
      }

      // Điền mật khẩu mới nếu có
      if (tc.newPassword !== null) {
        await passwordInput.fill(tc.newPassword);
      }

      // 3. Thực hiện hành động tiếp theo (Submit hoặc Back)
      if (tc.step2Action === 'back') {
        const backButton = page.getByRole('button', { name: 'Quay lại' });
        await backButton.click();
        // Kiểm tra đã quay lại màn hình 1 (Assertion kiểu 2: toBeVisible)
        await expect(getOtpButton).toBeVisible();
      } else if (tc.step2Action === 'submit') {
        // Lắng nghe sự kiện window.alert xuất hiện trong ứng dụng
        let alertMessage = '';
        page.once('dialog', async dialog => {
          alertMessage = dialog.message();
          await dialog.accept();
        });

        await submitButton.click();

        // Kiểm tra kết quả phản hồi qua alert tùy thuộc vào dữ liệu đầu vào
        if (tc.dataType === 'valid' || tc.testCaseId === 'BVA_PW_02') {
          // Kỳ vọng thành công -> chuyển hướng về trang /login
          await expect(page).toHaveURL(/\/login/);
        } else {
          // Kỳ vọng thất bại (mật khẩu yếu hoặc sai OTP) -> Kiểm tra alert báo lỗi
          // Chờ dialog xuất hiện và xác thực nội dung thông báo lỗi
          expect(alertMessage).toBeTruthy();
        }
      }
    });
  }
});
