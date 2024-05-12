const { test, expect } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");
const { SearchBarPage } = require("../pages/searchbarpage");
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');


test.describe('Search product', () => {
test("Search Product (filtro de aceite)", async ({ page }) => {
  const homePage = new HomePageCroper(page);
  const searchPage = new SearchBarPage(page);
  const testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
  await homePage.goto();
  await searchPage.searchProduct(testData.productName);
  await searchPage.verifyResultsContainProduct(testData.productName);
});

test("Search any Product", async ({ page }) => {
    const homePage = new HomePageCroper(page);
    const searchPage = new SearchBarPage(page);
    const testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
    await homePage.goto();
    await searchPage.searchProduct(testData.productName2);
    await searchPage.verifyResultsContainProducttwo(testData.productName2);
  });

// test("Search all Product (filtro de aceite)", async ({ page }) => {
//     const homePage = new HomePageCroper(page);
//     const searchPage = new SearchBarPage(page);
//     const testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
//     await homePage.goto();
//     const filteredProducts = await searchPage.searchAllProduct(testData.productName);
//     await searchPage.verifyResultsContainallProduct(filteredProducts, testData.productName);
//   });

});


// Para este ejemplo el producto, a buscar seria "filtro", el cual me trae otras respuestas


