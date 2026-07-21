import {expect, test} from '@playwright/test'
test('Handling the alert box', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com")
    page.on('dialog', (dialog)=>
    {
        console.log("alerts message1", dialog.message());
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();

    })
    await page.locator('[id="alertBtn"]').click();
    await page.waitForTimeout(5000);
    await page.close();

}
)
test ('Handling confirmation alert box', async ({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com")
    page.on('dialog', (dialog)=>
    {
        console.log("alerts message2", dialog.message());
        expect(dialog.message()).toContain('Press a button');
        dialog.dismiss();

    })
    await page.locator('[id="confirmBtn"]').click();
    await page.waitForTimeout(5000);
    await page.close();
}
)

test ('Handling prompt alert box', async ({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com")
    page.on('dialog', (dialog)=>
    {
        console.log("alerts message3", dialog.message());
        expect(dialog.message()).toContain('Please enter your name:');
        console.log('Default Value', dialog.defaultValue());
        dialog.accept('rajesh');
        
    })
    await page.locator('[id="promptBtn"]').click();
    await page.waitForTimeout(5000);
    await page.close();
}
)