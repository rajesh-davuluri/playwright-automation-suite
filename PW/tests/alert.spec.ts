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