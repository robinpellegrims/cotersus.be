import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');

  // Check page title
  await expect(page).toHaveTitle(/Cotersus/);

  // Check hero heading
  const h1 = page.locator('h1').first();
  await expect(h1).toContainText('Your Partner for');
  await expect(h1).toContainText('Quality Software Development');

  // Check first section heading
  const firstH2 = page.locator('h2').first();
  await expect(firstH2).toContainText('How We Help You');
});
