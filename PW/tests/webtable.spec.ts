import {test} from '@playwright/test'
test ('webtable elements handle', async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com")
    const table_rows = page.locator('[name="BookTable"]>tbody>tr').all();
    console.log("No of Rows:", (await table_rows).length);
    //const table_rows2 = page.locator('[name="BookTable"]>tbody>tr').all();
    //console.log("no of rows:", (await table_rows2).length)
    await page.waitForTimeout(5000);
    page.close();

}
)
