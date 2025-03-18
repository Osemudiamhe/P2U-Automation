import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login';

   test('purchase with pomLogin', async ({ page }) => {

   const login = new Login (page)

   await login.gotoLoginPage() 

   await login.login('Osemudia', 'Presh@1234')

   await expect(page.getByRole('link', { name: '로그아웃' })).toBeVisible();

  await page.getByRole('link', { name: ' 전체상품' }).click();

  await page.getByRole('link', { name: '뷰티/피부' }).click();

  await page.getByRole('link', { name: '미용 도구 목욕 수건' }).first().click();

  await page.getByRole('button', { name: '바로구매' }).click();

  await page.getByRole('radio', { name: '주문자와 동일' }).check();

//   await page.getByRole('textbox', { name: '전하실말씀 전하실말씀' }).click();

  await page.getByRole('textbox', { name: '전하실말씀 전하실말씀' }).fill('I need this product delivered as soon as possible');

  await page.getByRole('button', { name: '결제등록요청' }).click();

  await page.getByRole('button', { name: 'Close' }).click();
});