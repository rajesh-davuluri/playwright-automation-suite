import {test, expect} from '@playwright/test'

test('Handling the multiple checkboxes', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const days: String []=['', '', '','', '',''

    await expect(page.getByRole('checkbox', {name:'Sunday'})).toBeVisible();
    await page.getByRole('checkbox', {name:'Sunday'}).check();
    expect(page.getByRole('checkbox',{name:'Sunday'}).isChecked()).toBeTruthy();

})
