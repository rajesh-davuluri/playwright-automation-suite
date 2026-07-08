import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.screenshot({ path: 'screenshot.png', fullPage:true });
  await page.getByRole('textbox', { name: 'Email or mobile number' }).click();
  await expect(page.getByRole('textbox', { name: 'Email or mobile number' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Email or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email or mobile number' }).fill('helloworld');
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('esst');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x1iyjqo2.x2lwn1j.xl56j7k').first().click();
});