// @ts-check
import { test, expect } from '@playwright/test';

test('Scroll To Particular Element Example @sanity', async ({ page }) => {
  //test.setTimeout(800000)
  await page.goto('https://demowebshop.tricentis.com/');
  const element = page.locator(".account")
  await element.scrollIntoViewIfNeeded();
  await element.click()
  await page.waitForTimeout(5000)
});