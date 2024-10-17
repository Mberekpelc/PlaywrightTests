import { test, expect } from "@playwright/test";

test('todo someting', async ({page}) =>{
    await page.goto ('https://google.co.uk');
    await page.getByAltText('Google').click();

});