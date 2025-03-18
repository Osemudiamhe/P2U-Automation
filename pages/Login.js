exports.Login =
class Login {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: '로그인' });
        this.usernameField = page.getByRole('textbox', { name: '아이디 입력' });
        this.passwordField = page.getByRole('textbox', { name: '비밀번호 입력' });
        this.loginButton = page.getByRole('button', { name: '로그인', exact: true });
    }

    async gotoLoginPage(){
        await this.page.goto('https://dev.p2u.kr/bbs/content.php?co_id=p2uintro');
    }
    
    async login(username, password) {
        await this.loginLink.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}