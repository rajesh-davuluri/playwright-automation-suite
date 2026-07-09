import {test, expect} from '@playwright/test'

test('textbox handling', async ({page})=>{
await page.goto('https://demoqa.com/automation-practice-form/')
//await page.waitForTimeout(3000) //Keeps the browser open briefly so you can see it running
//filling textbox 
await page.getByPlaceholder('First Name').fill('Rajesh')
await page.waitForTimeout(3000)
//filling textbox 
await page.getByPlaceholder('Last Name').fill('Davuluri')
//filling textbox 
await page.getByPlaceholder('name@example.com').fill('test@testing.com')
await page.waitForTimeout(5000)



})