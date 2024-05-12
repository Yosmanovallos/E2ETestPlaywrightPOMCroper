const { test } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");

let homePage;
let cardsPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePageCroper(page);
  await homePage.goto();
});

exports.getPages = () => ({ homePage, cardsPage });