import { test, expect } from '@playwright/test';

const loginUrl =
  'http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx';

const expectedUrl =
  'http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx';

test('Log in to SmartBear WebOrders', async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel('Username:').fill('Tester');
  await page.getByLabel('Password:').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(expectedUrl);
  await expect(page.getByRole('heading', { name: 'List of All Orders' })).toBeVisible();
});
