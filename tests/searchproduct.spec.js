const { test, expect } = require("@playwright/test");
const { HomePageCroper } = require("../pages/homepage");
const { SearchBarPage } = require("../pages/searchbarpage");
const { Hooks } = require("../Hooks/hooks");
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');


test.describe('Search product', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePageCroper(page);
    await homePage.goto();
  });


test("Search Product (filtro de aceite)", async ({ page }) => {
  const searchPage = new SearchBarPage(page);
  const hooks = new Hooks(page);
  const testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
  await searchPage.searchProduct(testData.productName);
  await hooks.verifyResultsContainProduct(testData.productName);
});

test("Search any Product", async ({ page }) => {
  const searchPage = new SearchBarPage(page);
  const hooks = new Hooks(page);
  const testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
  await searchPage.searchProduct(testData.productName2);
  await hooks.verifyResultsContainProducttwo(testData.productName2);
  });


  test("Search all Product", async ({ page }) => {
    const searchPage = new SearchBarPage(page);
    const hooks = new Hooks(page);
    const testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
    await searchPage.searchAllProduct(testData.productName);
  });


});


// Para este ejemplo el producto, a buscar seria "filtro", el cual me trae otras respuestas


