import { test, expect } from '@playwright/test';
// Importing the Playwright test library and its assertion module for running tests and validating outcomes.

test('Logintest', async ({ page }) => { 
    // Declaring a test named 'Logintest'. It uses an asynchronous function to interact with a browser page.

await page.goto('https://dev.p2u.kr/bbs/content.php?co_id=p2uintro');
    // Navigating to the specified URL. This is the initial page where the test begins.

 await page.getByRole('link', { name: '로그인' }).click();
     // Locating a link with the role of 'link' and name '로그인' (Login in Korean) and simulating a click on it.

 await page.getByRole('textbox', { name: '아이디 입력' }).fill('Osemudia');
     // Filling in the text box labeled '아이디 입력' (ID Input) with the value 'Osemudia'.

 await page.getByRole('textbox', { name: '비밀번호 입력' }).fill('Presh@1234');
     // Filling in the text box labeled '비밀번호 입력' (Password Input) with the specified password.

 await page.getByRole('checkbox', { name: '자동로그인' }).check();
     // Locating the checkbox labeled '자동로그인' (Auto Login) and selecting it.

 await page.getByRole('button', { name: '확인' }).click();
     // Clicking the button labeled '확인' (Confirm) to submit the login credentials.

 await page.getByRole('button', { name: '로그인', exact: true }).click();});
     // Clicking a second button labeled '로그인' (Login) using an exact match to ensure the correct button is selected.
