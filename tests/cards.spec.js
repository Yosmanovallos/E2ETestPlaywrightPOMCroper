const { test, expect } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");
const { SearchBarPage } = require("../pages/searchbarpage");
const { CardsPage } = require("../pages/cardspage");


test.describe('Cards', () => {
test("Card Agri Supplies Link", async ({ page }) => {
  const homePage = new HomePageCroper(page);
  const cardsPage = new CardsPage(page);
  await homePage.goto();
  await cardsPage.AgriSuppliesLink(page);

});

test("Card Final Products Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const cardsPage = new CardsPage(page);
    await homePage.goto();
    await cardsPage.FinalProductsLink(page);
  
});

test("Card Store Branches Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const cardsPage = new CardsPage(page);
    await homePage.goto();
    await cardsPage.StoreBranchesLink(page);
  
});0

test("Card Farm Management Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const cardsPage = new CardsPage(page);
    await homePage.goto();
    await cardsPage.FarmManagementLink(page);
  
});0

test("Card Credit Lines Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const cardsPage = new CardsPage(page);
    await homePage.goto();
    await cardsPage.CreditLinesLink(page);
  
});0

test("Card Discount Offers Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const cardsPage = new CardsPage(page);
    await homePage.goto();
    await cardsPage.DiscountOffersLink(page);
  
});0
  
});