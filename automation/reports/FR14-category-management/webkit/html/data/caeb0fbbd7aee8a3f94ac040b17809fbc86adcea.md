# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\category-management.spec.ts >> FR-14: Quản lý danh mục (Category Management CRUD) - Data-Driven Tests >> TC_ADD_CAT_06_AND_BVA_01: Kiểm tra báo lỗi khi để trống trường Tên danh mục (Ngoài biên dưới 0 ký tự)
- Location: tests\category-management.spec.ts:31:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('row').filter({ has: getByRole('button', { name: 'Xóa' }) })
Expected: 8
Received: 9
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('row').filter({ has: getByRole('button', { name: 'Xóa' }) }) with timeout 5000ms
  - waiting for getByRole('row').filter({ has: getByRole('button', { name: 'Xóa' }) })
    13 × locator resolved to 9 elements
       - unexpected value "9"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - heading "EShop Admin" [level=1] [ref=e5]
    - list [ref=e6]:
      - listitem [ref=e7] [cursor=pointer]: Dashboard
      - listitem [ref=e8] [cursor=pointer]: Danh mục
      - listitem [ref=e9] [cursor=pointer]: Sản phẩm
      - listitem [ref=e10] [cursor=pointer]: Mã Giảm Giá
      - listitem [ref=e11] [cursor=pointer]: Đơn hàng
      - listitem [ref=e12] [cursor=pointer]: Người dùng
      - listitem [ref=e13] [cursor=pointer]: Đăng xuất
  - generic [ref=e15]:
    - heading "Quản lý Danh mục" [level=2] [ref=e16]
    - generic [ref=e17]:
      - textbox "Tên danh mục mới" [ref=e18]
      - button "Thêm mới" [ref=e19] [cursor=pointer]
    - table [ref=e20]:
      - rowgroup [ref=e21]:
        - row [ref=e22]:
          - columnheader "ID" [ref=e23]
          - columnheader "Tên Danh Mục" [ref=e24]
          - columnheader "Hành động" [ref=e25]
      - rowgroup [ref=e26]:
        - row [ref=e27]:
          - cell "#1" [ref=e28]
          - cell "Điện thoại" [ref=e29]
          - cell [ref=e30]:
            - button "Xóa" [ref=e31] [cursor=pointer]
        - row [ref=e32]:
          - cell "#2" [ref=e33]
          - cell "Laptop" [ref=e34]
          - cell [ref=e35]:
            - button "Xóa" [ref=e36] [cursor=pointer]
        - row [ref=e37]:
          - cell "#3" [ref=e38]
          - cell "Phụ kiện" [ref=e39]
          - cell [ref=e40]:
            - button "Xóa" [ref=e41] [cursor=pointer]
        - row [ref=e42]:
          - cell "#4" [ref=e43]
          - cell "Quần Áo" [ref=e44]
          - cell [ref=e45]:
            - button "Xóa" [ref=e46] [cursor=pointer]
        - row [ref=e47]:
          - cell "#5" [ref=e48]
          - cell "2026" [ref=e49]
          - cell [ref=e50]:
            - button "Xóa" [ref=e51] [cursor=pointer]
        - row [ref=e52]:
          - cell "#6" [ref=e53]
          - cell "Dụng cụ @#$" [ref=e54]
          - cell [ref=e55]:
            - button "Xóa" [ref=e56] [cursor=pointer]
        - row [ref=e57]:
          - cell "#7" [ref=e58]
          - cell "Áo thun nam - Mẫu 2026!" [ref=e59]
          - cell [ref=e60]:
            - button "Xóa" [ref=e61] [cursor=pointer]
        - row [ref=e62]:
          - cell "#8" [ref=e63]
          - cell [ref=e64]
          - cell [ref=e65]:
            - button "Xóa" [ref=e66] [cursor=pointer]
        - row [ref=e67]:
          - cell "#9" [ref=e68]
          - cell [ref=e69]
          - cell [ref=e70]:
            - button "Xóa" [ref=e71] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import * as fs from 'fs';
  3   | import * as path from 'path';
  4   | 
  5   | // Helper xử lý dữ liệu chứa ký hiệu đặc biệt
  6   | function escapeRegExp(value: string): string {
  7   |   return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  8   | }
  9   | 
  10  | // Đọc dữ liệu từ file JSON riêng biệt theo hướng Data-Driven
  11  | const dataPath = path.join(__dirname, '../test-data/category-management.json');
  12  | const testData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  13  | 
  14  | test.describe('FR-14: Quản lý danh mục (Category Management CRUD) - Data-Driven Tests', () => {
  15  | 
  16  |   // Thiết lập đăng nhập chung trước mỗi test case
  17  |   test.beforeEach(async ({ page }) => {
  18  |     await page.goto(testData.environment.baseUrl);
  19  | 
  20  |     // Đăng nhập tài khoản Admin
  21  |     await page.getByPlaceholder('Email').fill(testData.environment.adminCredentials.email);
  22  |     await page.getByPlaceholder('Password').fill(testData.environment.adminCredentials.password);
  23  |     await page.getByRole('button', { name: 'Login' }).click();
  24  | 
  25  |     // Điều hướng sang tab Quản lý Danh mục trên Admin Dashboard
  26  |     await page.getByText('Danh mục', { exact: true }).click();
  27  |   });
  28  | 
  29  |   // Duyệt qua toàn bộ danh sách test cases từ JSON để chạy tự động theo mô hình Data-Driven
  30  |   for (const tc of testData.testCases) {
  31  |     test(`${tc.testCaseId}: ${tc.title}`, async ({ page }) => {
  32  |       
  33  |       // Xử lý nhóm Test Cases tạo danh mục (Create)
  34  |       if (tc.action === 'submit' || tc.action === 'browser_back') {
  35  |         const inputField = page.getByPlaceholder('Tên danh mục mới');
  36  |         
  37  |         // Kiểm tra phương thức nhập liệu (xử lý chuỗi 10,000 chữ A nếu cần)
  38  |         if (tc.inputMethod === 'paste_10000_a') {
  39  |           const hugeString = 'A'.repeat(10000);
  40  |           await inputField.evaluate((node: HTMLInputElement, val: string) => {
  41  |             node.value = val;
  42  |             node.dispatchEvent(new Event('input', { bubbles: true }));
  43  |           }, hugeString);
  44  |         } else {
  45  |           await inputField.fill(tc.categoryName);
  46  |         }
  47  | 
  48  |         // Thực hiện hành động theo kịch bản (Browser Back hoặc Bấm nút Thêm mới)
  49  |         if (tc.action === 'browser_back') {
  50  |           await page.getByText('Dashboard', { exact: true }).click();
  51  | 
  52  |           await expect(
  53  |             page.getByRole('heading', { name: 'Dashboard' })
  54  |           ).toBeVisible();
  55  | 
  56  |           // Quay lại tab Danh mục
  57  |           await page.getByText('Danh mục', { exact: true }).click();
  58  | 
  59  |           await expect(
  60  |             page.getByRole('heading', { name: 'Quản lý Danh mục' })
  61  |           ).toBeVisible();
  62  | 
  63  |           // Kiểm tra danh mục nhập không được thêm vào trong list danh mục
  64  |           const categoryRow = page.getByRole('row').filter({
  65  |             has: page.getByRole('cell', {
  66  |               name: new RegExp(`^${escapeRegExp(tc.categoryName)}$`, 'i')
  67  |             })
  68  |           });
  69  | 
  70  |           await expect(categoryRow).toHaveCount(0);
  71  | 
  72  |           return;
  73  |         }
  74  | 
  75  |         const categoryRows = page.getByRole('row').filter({
  76  |           has: page.getByRole('button', { name: 'Xóa' })
  77  |         });
  78  | 
  79  |         const countBefore = await categoryRows.count();
  80  | 
  81  |         await page.getByRole('button', { name: 'Thêm mới' }).click();
  82  | 
  83  |         // Kiểm tra kết quả mong đợi dựa theo từng loại expectedType
  84  |         if (tc.expectedType === 'success') {
  85  |           // Assertion 2 (Kiểu 2 - toContainText): Xác thực tên danh mục xuất hiện trong bảng danh sách
  86  |           const categoryRow = page.getByRole('row', { name: new RegExp(escapeRegExp(tc.categoryName), 'i') });
  87  |           await expect(categoryRow.last()).toBeVisible();
  88  |           await expect(categoryRow.last()).toContainText(tc.categoryName);
  89  |         } 
  90  |         else if (tc.expectedType === 'validation_error') {
  91  |           // Assertion 3 (Kiểu 3 - toHaveAttribute / not.toBeVisible): Trường rỗng/khoảng trắng bị chặn bởi thuộc tính required hoặc không thêm dòng mới
  92  |           await page.waitForTimeout(1000);
> 93  |           await expect(categoryRows).toHaveCount(countBefore);
      |                                      ^ Error: expect(locator).toHaveCount(expected) failed
  94  |         }
  95  |         else if (tc.expectedType === 'graceful_handling') {
  96  |           // Assertion 4: Kiểm tra hệ thống xử lý chuỗi cực lớn mà không bị crash giao diện (vẫn hiển thị form/table)
  97  |           await expect(page.getByRole('button', { name: 'Thêm mới' })).toBeVisible();
  98  | 
  99  |           const categoryRow = page.getByRole('row', {
  100 |             name: new RegExp(`A{10000}`)
  101 |           });
  102 | 
  103 |           await expect(categoryRow.last()).toBeVisible();
  104 |           await expect(categoryRow.last()).toContainText('A'.repeat(10000));
  105 |         }
  106 |       } 
  107 |       
  108 |       // Xử lý nhóm Test Cases xóa danh mục (Delete)
  109 |       else if (tc.action === 'delete') {
  110 |         const targetName = tc.targetCategoryName;
  111 |         const row = page.getByRole('row', { name: new RegExp(escapeRegExp(targetName), 'i') }).last();
  112 |         
  113 |         // Đảm bảo danh mục tồn tại trước khi xóa
  114 |         await expect(row).toBeVisible();
  115 | 
  116 |         // Bấm nút Xóa tương ứng với dòng danh mục
  117 |         
  118 | 
  119 |         if (tc.expectedType === 'delete_success') {
  120 |           // Assertion (Kiểu 5 - not.toBeVisible): Danh mục trống bị xóa thành công và biến mất khỏi bảng
  121 |           await row.getByRole('button', { name: 'Xóa' }).click();
  122 |           await expect(page.getByRole('row', { name: new RegExp(escapeRegExp(targetName), 'i') })).not.toBeVisible();
  123 |         } 
  124 |         else if (tc.expectedType === 'delete_error_500') {
  125 |           // Assertion (Kiểu 6 - toBeVisible): Danh mục chứa sản phẩm bị từ chối xóa, vẫn được giữ nguyên trên giao diện
  126 |           const deleteResponse = page.waitForResponse(response =>
  127 |             response.request().method() === 'DELETE' &&
  128 |             response.url().includes('/api/categories/')
  129 |           );
  130 | 
  131 |           await row.getByRole('button', { name: 'Xóa' }).click();
  132 |           const response = await deleteResponse;
  133 | 
  134 |           expect(response.status()).toBe(500);
  135 | 
  136 |           // Danh mục vẫn được giữ nguyên trên giao diện
  137 |           await expect(row).toBeVisible();
  138 |         }
  139 |       }
  140 |     });
  141 |   }
  142 | 
  143 | });
  144 | 
```