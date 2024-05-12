const { test, expect } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");
const { HeaderLinksPage } = require("../pages/headerslinkspage");
const { CreditsPage } = require("../pages/creditspage");
const { CategoriesPage } = require("../pages/categoriespage");


test.describe('Headers links verify', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePageCroper(page);
    await homePage.goto();
  });

test("Offers Link Verify", async ({ page }) => {
    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.OffersLinkVerify(page);
});

test("Stores Link Verify", async ({ page }) => {
    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.StoresLinkVerify(page);
});

test("Insurances Link Verify", async ({ page }) => {
    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.InsurancesLinkVerify(page);
});

test("Product Lists Link", async ({ page }) => {

    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.ProductListsLink(page);
});

test("Tech Packages Link", async ({ page }) => {

    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.TechPackagesLink(page);
});

test("Sell Link", async ({ page }) => {

    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.SellLink(page);
});

test("Management Link", async ({ page }) => {

    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.ManagementLink(page);
});

test("News Menu Item Link", async ({ page }) => {

    const headersLinksPage = new HeaderLinksPage(page);
    await headersLinksPage.NewsMenuItemLink(page);
});


});


test.describe('Categories', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePageCroper(page);
    await homePage.goto();
  });


    test("Categories Verify", async ({ page }) => {  
      const categoriesPage = new CategoriesPage(page)
      await categoriesPage.CategoriesVerify();
    });

    test("Categories Verify Modals", async ({ page }) => {   
        const categoriesPage = new CategoriesPage(page);
        await categoriesPage.CategoriesCheckModals();
      });
    
    });
    
test.describe('Credits', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePageCroper(page);
    await homePage.goto();
  });

    test("Credits Solicite", async ({ page }) => {  
      const creditsPage = new CreditsPage(page)
      await creditsPage.CreditSolicite(page);
    });

    test("My Credits Solicite", async ({ page }) => {      
        const creditsPage = new CreditsPage(page);
        await creditsPage.MyCreditsSolicite(page);
    });

      test("Financial Entities", async ({ page }) => {   
        const creditsPage = new CreditsPage(page);
        await creditsPage.FinancialEntities(page);
    }); 
});