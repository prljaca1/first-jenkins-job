import { test } from "@playwright/test";

test.describe("practice.cydeo", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com/");

    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
        await page.close();
    });


    test("title of page", async ({ page }) => {
      console.log(await page.title());

    });

    test("url of page", async ({ page }) => {
        console.log( page.url());
        
    });

    
});
