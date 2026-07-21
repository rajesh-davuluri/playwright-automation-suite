import { test, expect } from "@playwright/test"

test('Handling the DropDowns in playwright', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Find dropdown : value attribute
    //await page.locator('[id="country"]').selectOption('india')
    await page.waitForTimeout(5000);
    //Find using lable value
    //await page.locator('[id="country"]').selectOption({label :'France'})
    await page.locator('[id="country"]').selectOption({ index: 4 })
    await page.close();
}
)

test('Handling multiple drop down selection', async ({page })=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropdown_options = page.locator('[id="country"]>option');
    await expect(dropdown_options).toHaveCount(10);
    expect(await dropdown_options.count()).toBe(10);
    expect((await dropdown_options.all()).length).toBe(10);
    //console.log(expect(dropdown_otpions).toHaveCount(10));
    console.log(await dropdown_options.allTextContents());
    //await page.locator('[id="colors"]').selectOption(['blue', 'green', 'red', 'yellow'])
     const optiontext= await dropdown_options.allTextContents();
    const opt_text =optiontext.map(text => text.trim());
    await page.waitForTimeout(5000);
    await page.close();
})



