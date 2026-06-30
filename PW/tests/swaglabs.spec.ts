import {test} from "@playwright/test"

test('Verify the user is able to login', async({page})=>
{
    //load the webpage
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox', {name:'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click();


})