//open amazon website
import {test} from '@playwright/test'

test('has title', async ({page})=>
{
    await page.goto("http://amazon.in/");
    console.log(page.title());
});