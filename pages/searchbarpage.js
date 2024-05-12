// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');
const { HomePageCroper } = require("../pages/homepage");

exports.SearchBarPage = class SearchBarPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.homepageCroper = new HomePageCroper(page);
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
        this.searchBox = page.getByRole('textbox', { name: 'Busca las que necesitas...' });
        this.resultList = page.locator('ul[class="flex flex-col gap-2xs"] > li');

    }

    async searchProduct(productName) {
        // Click on the search button to activate the search bar
        await this.homepageCroper.searchButton.click();
        
        // Verify the search box is visible
        await expect(this.searchBox).toBeVisible();

        // Enter the product name and press Enter
        await this.searchBox.click();
        await this.searchBox.fill(productName);
        // Wait for the search results to load
        await this.page.waitForResponse(response => 
            response.url().includes('/_msearch/template') && response.status() === 200
        );
    }

    // async searchAllProduct(productName) {
    //     // Click on the search button to activate the search bar
    //     await this.homepageCroper.searchButton.click();
        
    //     // Verify the search box is visible
    //     await expect(this.searchBox).toBeVisible();
    
    //     // Enter the product name and press Enter
    //     await this.searchBox.click();
    //     await this.searchBox.fill(productName);
    //     await this.searchBox.press('Enter');
    
    //     // Log the search action
    //     console.log(`Searching for product: ${productName}`);
        
    //     // Wait for the search results response
    //     const response = await this.page.waitForResponse(response => 
    //         response.url().includes('/products-production/_search/template') && response.status() === 200
    //     );
        
    //     // Parse the response JSON
    //     const responseBody = await response.json();
    //     console.log(`Total Products Found: ${responseBody.hits.total.value}`);
        
    //     // Log each product name for debugging
    //     responseBody.hits.hits.forEach((hit, index) => {
    //         console.log(`Product ${index + 1}: ${hit._source.name}`);
    //     });
    
    //     // Filter the products by the product name
    //     const filteredProducts = responseBody.hits.hits.filter(hit => 
    //         hit._source.name.toLowerCase().includes(productName.toLowerCase())
    //     );
    
    //     // Log the filtered products count
    //     console.log(`Filtered Products Count: ${filteredProducts.length}`);
    //     return filteredProducts;  // Return the array instead of its length
    // }

    // async verifyResultsContainallProduct(filteredProducts, productName) {
    //     // Verify each filtered product contains the product name
    //     filteredProducts.forEach((product, index) => {
    //         const productNameInList = product._source.name;
    //         console.log(`Filtered Product ${index + 1}: ${productNameInList}`);
    //         expect(productNameInList.toLowerCase()).toContain(productName.toLowerCase());
    //     });
    
    //     // Log the number of results found
    //     console.log(`Número de resultados encontrados: ${filteredProducts.length}`);
    
    //     // Verify there are some results
    //     expect(filteredProducts.length).toBeGreaterThan(0);
    // }


    async verifyResultsContainProduct(productName) {
        // Get the count of search results
        const resultCount = await this.resultList.count();

        // Verify each result contains the product name
        for (let i = 0; i < resultCount; i++) {
            const resultText = await this.resultList.nth(i).innerText();
            if (resultText) {
                expect(resultText.toLowerCase()).toContain(productName.toLowerCase());
            } else {
                console.warn(`Result ${i} is empty or undefined`);
            }
        }

        // Log the number of results found
        console.log(`Número de resultados encontrados: ${resultCount}`);
        
        // Verify there are some results
        expect(resultCount).toBeGreaterThan(0);
    }


    async verifyResultsContainProducttwo() {
        // Get the count of search results
        const resultCount = await this.resultList.count();

        // Log each result text
        for (let i = 0; i < resultCount; i++) {
            const resultText = await this.resultList.nth(i).innerText();
            console.log(`Resultado ${i + 1}: ${resultText}`);
        }

        // Log the number of results found
        console.log(`Número de resultados encontrados: ${resultCount}`);
        
        // Verify there are some results
        expect(resultCount).toBeGreaterThan(0);
    }

}