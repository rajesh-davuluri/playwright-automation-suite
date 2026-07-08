import {expect, test} from "@playwright/test"

test('Handling the actions in the page', async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.getByRole('textbox', {name:'Name:'}).fill('playwright')
    await page.getByPlaceholder('Enter Name').fill('automation testing')
    await page.getByPlaceholder('Enter Email').fill('automatsdion testing')
    await expect page.getByRole('radio', {name:'Male'}).isVisible).
    await page.getByRole('radio', {name:'Male', exact:true}).check()

})