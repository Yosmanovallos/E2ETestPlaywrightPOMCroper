const { test } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");
const { CardsPage } = require("../pages/cardspage");

test.describe('Cards', () => {

    let homePage;
    let cardsPage;
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePageCroper(page);
      await homePage.goto();
    });
     
test("Card Agri Supplies Link", async ({ page }) => {
    cardsPage = new CardsPage(page);
    await cardsPage.AgriSuppliesLink(page);
});


test("Card Final Products Link", async ({ page }) => {
    cardsPage = new CardsPage(page);
    await cardsPage.FinalProductsLink(page);  
});

test("Card Store Branches Link", async ({ page }) => {
    cardsPage = new CardsPage(page);
    await cardsPage.StoreBranchesLink(page);  
});

test("Card Farm Management Link", async ({ page }) => {
    cardsPage = new CardsPage(page);
    await cardsPage.FarmManagementLink(page); 
});

test("Card Credit Lines Link", async ({ page }) => {
    cardsPage = new CardsPage(page);
    await cardsPage.CreditLinesLink(page); 
});

test("Card Discount Offers Link", async ({ page }) => {
    cardsPage = new CardsPage(page);
    await cardsPage.DiscountOffersLink(page);
});  
});