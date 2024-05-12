const { test, expect } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");
const { HeaderLinksPage } = require("../pages/headerslinkspage");
const { CategoriesPage } = require("../pages/categoriespage");


test.describe('Headers links verify', () => {

test("Offers Link Verify", async ({ page }) => {
  const homePage = new HomePageCroper(page);
  const headersLinksPage = new HeaderLinksPage(page);
  await homePage.goto();
  await headersLinksPage.OffersLinkVerify(page);
});

test("Stores Link Verify", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.StoresLinkVerify(page);
});

test("Insurances Link Verify", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.InsurancesLinkVerify(page);
});

test("Product Lists Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.ProductListsLink(page);
});

test("Tech Packages Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.TechPackagesLink(page);
});

test("Sell Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.SellLink(page);
});

test("Management Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.ManagementLink(page);
});

test("News Menu Item Link", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const headersLinksPage = new HeaderLinksPage(page);
    await homePage.goto();
    await headersLinksPage.NewsMenuItemLink(page);
});


});

test.describe('Categories', () => {

    test("Categories Verify", async ({ page }) => {
      const homePage = new HomePageCroper(page);
      const categoriesPage = new CategoriesPage(page);
      await homePage.goto();
      await categoriesPage.CategoriesVerify();
    });

    test("Categories Verify Modals", async ({ page }) => {
        const homePage = new HomePageCroper(page);
        const categoriesPage = new CategoriesPage(page);
        await homePage.goto();
        await categoriesPage.CategoriesCheckModals();
      });
    
    });