import {test, expect} from '@playwright/test'

test('Handling the dropdown', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //await page.locator('[id="country"]').selectOption('United States').

}