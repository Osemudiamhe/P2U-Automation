import {test, expect } from '@playwright/test';
import { Login } from '../pages/Login';

test.describe('LoginTest', ()=>{

test ('loginPass', async ({page }) =>{


   const login = new Login (page)

   await login.gotoLoginPage() //hover and command + click directs you back to LoginPage (cntrl click on window)

   await login.login('Osemudia', 'Presh@1234')

   await expect(page.getByRole('link', { name: '로그아웃' })).toBeVisible();

})
});

