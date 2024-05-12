// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');
const { HomePageCroper } = require("../pages/homepage");
const { Hooks } = require("../Hooks/hooks");

exports.SearchBarPage = class SearchBarPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.homepageCroper = new HomePageCroper(page);
        this.hooks = new Hooks(page);
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
        this.searchBox = page.getByRole('textbox', { name: 'Busca las que necesitas...' });
        this.resultList = page.locator('ul[class="flex flex-col gap-2xs"] > li');

    }

    async searchProduct(productName) {
        await this.homepageCroper.searchButton.click();
        await expect(this.searchBox).toBeVisible();
        await this.searchBox.click();
        await this.searchBox.fill(productName);
        await this.hooks.statussearch(productName);
    }

    async searchAllProduct(productName) {
        await this.homepageCroper.searchButton.click();
        await expect(this.searchBox).toBeVisible();
        await this.searchBox.click();
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter')
        await this.hooks.statusfiltrodeaceite();
    }


}