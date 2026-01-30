import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Prince Boateng Asare/);
});

test('can navigation to projects', async ({ page }) => {
    await page.goto('/');

    // Click the View All link.
    await page.getByRole('link', { name: 'View All' }).first().click();

    // Expects page to have a heading with the name of "Projects".
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Results|Technical Case Studies/);
});

test('personality toggle works', async ({ page }) => {
    await page.goto('/');

    // Check initial state (Executive)
    // We can check for specific text that only appears in Executive mode
    // e.g. "Creative Directing Reformer" is in both?
    // Let's check the toggle button label
    const toggle = page.getByRole('button', { name: /Switch to/i });
    await expect(toggle).toBeVisible();

    // Click toggle
    await toggle.click();

    // Wait for state change
    // Check for technical content
});
