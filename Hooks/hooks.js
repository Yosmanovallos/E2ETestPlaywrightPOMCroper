// Inlcude playwright module
const { test, expect } = require('@playwright/test')


exports.Hooks = class Hooks {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.resultList = page.locator('ul[class="flex flex-col gap-2xs"] > li');
    }

    async statussearch(productName) {
        await this.page.waitForResponse(response => 
        response.url().includes('/_msearch/template') && response.status() === 200
        );
    }

    async statusgriSupplies() {
        const resultCount = await this.page.waitForResponse(async response => {
          if (response.url().includes('/_search/template') && response.status() === 200) {
            const json = await response.json();
            return json.took === 5 || json.took === 6 || json.took === 7 || json.took === 9; // Filtra por "took": 5 o 6
          }
        });

        
        console.log(`El status es: ${resultCount.status()}`);

        const responseBody = await resultCount.json();
        console.log('El response body es:', responseBody);
    }

    async statusFinalProductsLink() {
        const resultCount = await this.page.waitForResponse(async response => {
          if (response.url().includes('/_search/template') && response.status() === 200) {
            const json = await response.json();
            return json.took === 5 || json.took === 6 || json.took === 7 || json.took === 4; // Filtra por "took": 5 o 6
          }
        });

        
        console.log(`El status es: ${resultCount.status()}`);

        const responseBody = await resultCount.json();
        console.log('El response body es:', responseBody);
    }


    async StatusStoreBranchesLink() {
        const resultCount = await this.page.waitForResponse(async response => {
          if (response.url().includes('/_search/template') && response.status() === 200) {
            const json = await response.json();
            return json.took === 5 || json.took === 1 || json.took === 4 || json.took === 2; // Filtra por "took": 5 o 6
          }
        });
        
        console.log(`El status es: ${resultCount.status()}`);

        const responseBody = await resultCount.json();
        console.log('El response body es:', responseBody);
    }


    async StatusDiscountOffersLink() {
        const resultCount = await this.page.waitForResponse(async response => {
          if (response.url().includes('/_search/template') && response.status() === 200) {
            const json = await response.json();
            return json.took === 5 || json.took === 2; // Filtra por "took": 5 o 6
          }
        });
        
        console.log(`El status es: ${resultCount.status()}`);

        const responseBody = await resultCount.json();
        console.log('El response body es:', responseBody);
    }


    async statusfiltrodeaceite() {
        const resultCount = await this.page.waitForResponse(async response => {
          if (response.url().includes('/_search/template') && response.status() === 200) {
            const json = await response.json();
            return json.took === 15 || json.took === 7 || json.took === 8 || json.took === 6 || json.took === 5 || json.took === 2; // Filtra por "took": 5 o 6
          }
        });

        
        console.log(`El status es: ${resultCount.status()}`);

        const responseBody = await resultCount.json();
        console.log('El response body es:', responseBody);
    }


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