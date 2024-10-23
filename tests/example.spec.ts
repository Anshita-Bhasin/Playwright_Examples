import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  //await page.setViewportSize({ width: 1280, height: 728 });
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
