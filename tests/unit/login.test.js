import { test, expect } from '@playwright/test';

test('Logintest', async ({ page }) => {
  await page.goto('https://dev.p2u.kr/bbs/content.php?co_id=p2uintro');

  await page.getByRole('link', { name: '로그인' }).click();

//   await page.getByRole('textbox', { name: '아이디 입력' }).click();

  await page.getByRole('textbox', { name: '아이디 입력' }).fill('Osemudia');

//   await page.getByRole('textbox', { name: '비밀번호 입력' }).click();

  await page.getByRole('textbox', { name: '비밀번호 입력' }).fill('Presh@1234');

  await page.getByRole('checkbox', { name: '자동로그인' }).check();

  await page.getByRole('button', { name: '확인' }).click();

  await page.getByRole('button', { name: '로그인', exact: true }).click();
});