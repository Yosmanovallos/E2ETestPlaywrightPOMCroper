const { test, expect } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");

test("HomePage verify elements", async ({ page }) => {
  const homePage = new HomePageCroper(page);
  await homePage.goto();
  await homePage.verifyElementsVisible();
});
