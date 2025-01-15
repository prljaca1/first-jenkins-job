import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // Your test steps go here
  await page.goto("https://practice.cydeo.com/");
  let actuaLtitle = await page.title();

  //pause for 3 seconds
  // await page.waitForTimeout(3000);

  // print the actual title to the console
  console.log(actuaLtitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let actualURL = page.url();

  console.log(actualURL);
});

test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  await page.waitForTimeout(3000);

 // page.setViewportSize({ width: 1850, height: 1080 });

  await page.waitForTimeout(3000);


});
