import { test, expect } from '@playwright/test';

test('purchase', async ({ page }) => {
  await page.goto('https://dev.p2u.kr/bbs/content.php?co_id=p2uintro');

  await page.getByRole('link', { name: '로그인' }).click();

  await page.getByRole('textbox', { name: '아이디 입력' }).fill('Osemudia');

  await page.getByRole('textbox', { name: '비밀번호 입력' }).fill('Presh@1234');

  await page.getByRole('button', { name: '로그인', exact: true }).click();

  await page.getByRole('link', { name: ' 전체상품' }).click();

  await page.getByRole('link', { name: '뷰티/피부' }).click();

  await page.getByRole('link', { name: '미용 도구 목욕 수건' }).first().click();

  await page.getByRole('button', { name: '바로구매' }).click();

  await page.getByRole('radio', { name: '주문자와 동일' }).check();

  await page.getByRole('textbox', { name: '전하실말씀 전하실말씀' }).click();

  await page.getByRole('textbox', { name: '전하실말씀 전하실말씀' }).fill('I need this product delivered as soon as possible');

  await page.getByRole('button', { name: '결제등록요청' }).click();
  
  await page.getByRole('button', { name: 'Close' }).click();
});