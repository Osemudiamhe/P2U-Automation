import { test, expect } from '@playwright/test';

test('User Registration', async ({ page }) => {
  
  await page.goto('https://dev.p2u.kr/bbs/content.php?co_id=p2uintro');
  
  await page.getByRole('link', { name: '로그인' }).click();

  await page.getByRole('link', { name: '회원가입' }).click();

  await page.locator('#agree11').check();

  await page.locator('#agree21').check();

  await page.getByRole('button', { name: '약관 동의' }).click();

  await page.getByRole('textbox', { name: '아이디 필수 . 중복체크' }).fill('Igho');

  await page.getByRole('group').filter({ hasText: '아이디 필수 중복체크 아이디 입력 후 중복체크 비밀번호 필수 보안강도는 보통 이상이여야 합니다. 보안강도 비밀번호 확인 필수' }).getByRole('button').click();

  await page.getByRole('button', { name: '확인' }).click();

  await page.getByRole('textbox', { name: '비밀번호 필수' }).fill('Precious@1234');

  await page.locator('#reg_mb_password_re').fill('Precious@1234');

  await page.getByRole('textbox', { name: '이름 필수' }).fill('Precious');

  await page.getByRole('textbox', { name: '닉네임 필수 . 중복체크' }).fill('Preshy');

  await page.locator('form[name="fregisterform"] section').filter({ hasText: '닉네임필수 중복체크 닉네임 입력 후 중복체크 필수공백없이 한글, 영문, 숫자만 입력 가능(한글 2글자, 영문 4' }).getByRole('button').click();

  await page.getByRole('button', { name: '확인' }).click();
  
  await page.getByRole('textbox', { name: '이메일 필수 . 중복체크' }).fill('preshigho@gmail.com');

  await page.locator('form[name="fregisterform"] section').filter({ hasText: '이메일 필수 중복체크 이메일 입력 후 중복체크 필수' }).getByRole('button').click();

  await page.getByRole('button', { name: '확인' }).click();

  await page.getByRole('textbox', { name: '휴대폰번호 필수' }).fill('010-1234-5678');

  await page.getByRole('textbox', { name: '주소 필수' }).fill('N0 12');

  await page.getByRole('button', { name: '우편번호 (주소 검색 버튼을 클릭하여 조회)' }).click();

  await page.locator('#reg_mb_addr1').click();

  await page.keyboard.press("Meta+A") 

  await page.locator('#reg_mb_addr1').fill('예) 판교역로 166,  제주 첨단로 242');

  await page.evaluate(() => {
    document.querySelector('#captcha').value = 'mocked-captcha-solution';
  });

  await page.getByRole('button', { name: '회원가입' }).click();

});

