import {test} from '@playwright/test'

test('Locate the Elements with CSS', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('playwright')
    await page.locator('[placeholder="Enter EMail"]').fill('play2right@gmail.com')
})
