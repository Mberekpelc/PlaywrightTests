import { test, expect, selectors } from '@playwright/test';
import {login_page} from "../pages.ts";

test('test', async ({ page }) => {
  const login = new login_page(page)
  await login.landingpage();
  await login.loginpage('lawrence@mailinator.com', 'Testing@01');
  await login.addtocart();
  await login.checkout();
  await expect(page.locator('h1')).toContainText('Thankyou for the order.');
  await expect(page.getByRole('cell', { name: 'Questions? We\'re on call.', exact: true })).toBeVisible();

});