import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // navigate to googgle.com
  await page.goto("https://www.google.com/");

  // wait for 3 seconds
  await page.waitForTimeout(3000);

  let searchBox = page.locator("textarea[id='APjFqb']")



  await searchBox.fill("playwright");

  await page.waitForTimeout(3000);

  await searchBox.press("Enter");
  
  await page.waitForTimeout(3000);

});
/*

<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" 
autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" 
placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" 
autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" 
name="q" role="combobox" rows="1" spellcheck="false"
 data-ved="0ahUKEwiC8ZP4hdaKAxWUKFkFHUYnOvgQ39UDCAc"></textarea>

*/

//textarea[@class= "gLFyf"]