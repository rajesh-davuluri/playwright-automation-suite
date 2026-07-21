import { test, expect } from "@playwright/test"

test('Handling the DropDowns in playwright', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Find dropdown : value attribute
    await page.locator('[id="country"]').selectOption('australia')
    await page.waitForTimeout(5000);
    //Find using lable value
    //await page.locator('[id="country"]').selectOption({label :'China'})



//How to find the drop down value using index number
    await page.locator('[id="country"]').selectOption({ index: 4 })


    //How to select the multiple options in dropdown
    await page.locator('[id="colors"]').selectOption(['blue', 'green', 'red', 'yellow'])

    await page.waitForTimeout(5000);
    await page.close();
})


test('Handling the multiple dropdwon options in playwright', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdown_options= page.locator('[id="country"]>option');

    //verify are we locate the 10 elements 
    expect(dropdown_options).toHaveCount(10);
    expect(await dropdown_options.count()).toBe(10);
    expect((await dropdown_options.all()).length).toBe(10)
    expect((await dropdown_options.allTextContents()).length).toBe(10)
    

    //How to get the text from dropdown
    console.log(await dropdown_options.allTextContents());
    
    const optiontext= await dropdown_options.allTextContents();
    const opt_text =optiontext.map(text => text.trim());
    console.log(opt_text)
    
    expect(opt_text).toContain('Australia')

    if(opt_text.includes('Australia'))
    {
        await page.locator('[id="country"]').selectOption('Australia')
    }


    await page.waitForTimeout(5000);
    await page.close();
})