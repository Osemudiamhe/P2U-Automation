import { test, expect } from '@playwright/test'; 
// Importing Playwright's test framework and assertion library for writing and verifying test cases.

test('purchase', async ({ page }) => { 
    // Declaring a test named 'purchase'. It uses an asynchronous function that interacts with the browser page.

    await page.goto('https://dev.p2u.kr/bbs/content.php?co_id=p2uintro'); 
    // Navigating to the specified website URL where the purchasing process starts.

    await page.getByRole('link', { name: '로그인' }).click(); 
    // Clicking on the '로그인' (Login) link to navigate to the login page.

    await page.getByRole('textbox', { name: '아이디 입력' }).fill('Osemudia'); 
    // Filling the '아이디 입력' (ID Input) field with the username 'Osemudia'.

    await page.getByRole('textbox', { name: '비밀번호 입력' }).fill('Presh@1234'); 
    // Filling the '비밀번호 입력' (Password Input) field with the password 'Presh@1234'.

    await page.getByRole('button', { name: '로그인', exact: true }).click(); 
    // Clicking the exact '로그인' (Login) button to submit the login credentials.

    await page.getByRole('link', { name: ' 전체상품' }).click(); 
    // Clicking on the ' 전체상품' (All Products) link to view the entire catalog of products.

    await page.getByRole('link', { name: '뷰티/피부' }).click(); 
    // Clicking on the '뷰티/피부' (Beauty/Skin) link to navigate to the category for beauty and skincare products.

    await page.getByRole('link', { name: '미용 도구 목욕 수건' }).first().click(); 
    // Selecting and clicking the first product under the '미용 도구 목욕 수건' (Beauty Tools Bath Towel) category.

    await page.getByRole('button', { name: '바로구매' }).click(); 
    // Clicking the '바로구매' (Buy Now) button to proceed directly to the purchase process.

    await page.getByRole('radio', { name: '주문자와 동일' }).check(); 
    // Selecting the '주문자와 동일' (Same as Buyer) radio button to use the buyer's details for the order.

    await page.getByRole('textbox', { name: '전하실말씀 전하실말씀' }).click(); 
    // Clicking the '전하실말씀 전하실말씀' (Message to Seller) text box to focus on it.

    await page.getByRole('textbox', { name: '전하실말씀 전하실말씀' }).fill('I need this product delivered as soon as possible'); 
    // Filling the 'Message to Seller' text box with the delivery request note.

    await page.getByRole('button', { name: '결제등록요청' }).click(); 
    // Clicking the '결제등록요청' (Register Payment Request) button to proceed with the payment process.

    await page.getByRole('button', { name: 'Close' }).click(); 
    // Clicking the 'Close' button to finalize or exit the process after registering the payment request.
});
