import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // navigate to googgle.com
  await page.goto("https://www.google.com/");

  // wait for 3 seconds
  await page.waitForTimeout(3000);

});
