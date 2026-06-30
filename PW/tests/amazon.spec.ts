//open amazon website
import {test} from '@playwright/test'

test('has title', async ({page})=>
{
    await page.goto("http://amazon.in/");
    console.log(page.title());
});
test('read visible heading title', async ({ page }) => {
  await page.goto('https://amazon.in/');

  const heading = await page.locator('h1').textContent();
  console.log('Heading:', heading);
});