const { test, expect } = require('@playwright/test')
const { HeaderLinksPage } = require("../pages/headerslinkspage");
// create class
exports.CreditsPage = class CreditsPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
constructor(page){

this.headersLinksPage = new HeaderLinksPage(page);
this.creditsolicite = page.getByRole('menuitem', { name: 'Solicitar crédito' }).getByRole('link');
this.mycreditssolicite = page.getByRole('link', { name: 'Mis solicitudes de crédito' });
this.financialentities = page.getByRole('link', { name: 'Entidades financieras' });
}

    async CreditSolicite(page) {
    await this.headersLinksPage.creditsButton.click();
    await expect(this.creditsolicite).toBeVisible();
    await this.creditsolicite.click();
    await expect(page).toHaveURL("https://croper.com/request-credit/form");
    }

    async MyCreditsSolicite(page) {
        await this.headersLinksPage.creditsButton.click();
        await expect(this.mycreditssolicite).toBeVisible();
        await this.mycreditssolicite.click();
        await expect(page).toHaveURL("https://croper.com/auth/login");
    }

    async FinancialEntities(page) {
        await this.headersLinksPage.creditsButton.click();
        await expect(this.financialentities).toBeVisible();
        await this.financialentities.click();
        await expect(page).toHaveURL("https://croper.com/banks");
    }   


}
