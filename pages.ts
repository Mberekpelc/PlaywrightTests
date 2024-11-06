import {expect, type Locator, type Page } from '@playwright/test'

export class login_page {
    readonly page:Page;
    readonly emaillink:Locator;
    readonly passworslink: Locator;
    readonly loginbutton: Locator;
    constructor(page: Page) {
        this.page=page
        this.emaillink=page.getByPlaceholder('email@example.com')
        this.passworslink= page.getByPlaceholder('enter your passsword')
        this.loginbutton = page.getByRole('button', { name: 'Login' })
        
    }
    async landingpage(){
        await this.page.goto('https://rahulshettyacademy.com/client');
        await expect(this.page.getByRole('heading', { name: 'Practice Website for Rahul' })).toBeVisible();
        await expect(this.page.getByText('Register here')).toBeVisible();

    }
    async loginpage(username:string, password: string){
        await console.log("signing in to the page");
        await this.emaillink.click();
        await this.emaillink.fill(username);
        await this.passworslink.click();
        await this.passworslink.fill(password);
        await this.loginbutton.click();
    }

    async addtocart(){
        await console.log("adding items to cart");
        await this.page.getByRole("heading", {name: "Automation"});
        await this.page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
        await this.page.getByRole('button', { name: ' Add To Cart' }).first().click();
        await this.page.getByRole('button', { name: ' Cart' }).click();
        await this.page.getByRole('button', { name: 'Checkout❯' }).click();
        await this.page.getByText('Place Order').click();
    }
    async checkout(){
        await console.log('checking out items');
        await this.page.getByRole('combobox').nth(1).selectOption('25');
        await this.page.locator('input[type="text"]').nth(1).click();
        await this.page.locator('input[type="text"]').nth(1).fill('123');
        await this.page.locator('input[type="text"]').nth(2).click();
        await this.page.locator('input[type="text"]').nth(2).fill('Tester Testing');
        await this.page.getByPlaceholder('Select Country').click()
        await this.page.keyboard.type('United Kingdom', { delay: 100 });
        await this.page.getByRole('button', { name: ' United Kingdom' }).click();
        await this.page.getByText('Place Order').click();
        

    }
}