import { test, expect } from '@playwright/test';

test.use({ headless: false });

test('Drag and drop test', async ({ page }) => {
  // Go to the target page
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  // Locate the elements for Box A and Box B
  const boxA = page.locator('#column-a');
  const boxB = page.locator('#column-b');

  // Drag Box A to Box B
  await boxA.dragTo(boxB);

  // Verify that Box A is now in the position of Box B
  await expect(boxB).toHaveText('A');

  // Drag Box A back to its original position
  await boxB.dragTo(boxA);

  // Verify that Box A is back to its original position
  await expect(boxA).toHaveText('A');
});