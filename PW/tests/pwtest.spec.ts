//open local website
import {test} from '@playwright/test'

test('pw test', async({page})=>
{
    await page.goto("http://localhost:4200/");
    await page.getByRole('link', {name:'Forms'}).click();
    await page.getByRole('link', {name:'Form Layouts'}).click();

})