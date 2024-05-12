
const { test, expect } = require('@playwright/test')
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');
// create class
exports.HeaderLinksPage = class HeaderLinksPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
constructor(page){
this.categoriesButton = page.getByRole('button', { name: 'Categorías' });
this.offersLink = page.getByRole('link', { name: 'Ofertas', exact: true });
this.storesLink = page.getByRole('link', { name: 'Tiendas', exact: true });
this.insurancesLink = page.getByRole('link', { name: 'Seguros', exact: true });
this.creditsButton = page.getByRole('button', { name: 'Créditos' });
this.productListsLink = page.getByRole('link', { name: 'Listas de productos' });
this.techPackagesLink = page.getByRole('link', { name: 'Paquetes tecnológicos' });
this.sellLink = page.getByRole('link', { name: 'Vender' });
this.managementLink = page.getByRole('link', { name: 'Gestión', exact: true });
this.newsMenuItemLink = page.getByRole('menuitem', { name: 'Noticias' }).getByRole('link');
}



async OffersLinkVerify(page) {
    await this.offersLink.click();
    await expect(page).toHaveURL("https://croper.com/offers");
}

async StoresLinkVerify(page) {
    await this.storesLink.click();
    await expect(page).toHaveURL("https://croper.com/stores");
}

async InsurancesLinkVerify(page) {
    await this.insurancesLink.click();
    await expect(page).toHaveURL("https://croper.com/stores/145-tuprimero");
}

async ProductListsLink(page) {
    await this.productListsLink.click();
    await expect(page).toHaveURL("https://croper.com/auth/login");
}

async TechPackagesLink(page) {
    await this.techPackagesLink.click();
    await expect(page).toHaveURL("https://croper.com/packages");
}

async SellLink(page) {
    await this.sellLink.click();
    await expect(page).toHaveURL("https://croper.com/auth/login");
}

async ManagementLink(page) {
    await this.managementLink.click();
    await expect(page).toHaveURL("https://croper.com/auth/login");
}

async NewsMenuItemLink(page) {
    
    const page4Promise = page.waitForEvent('popup');
    await this.newsMenuItemLink.click();
    const page4 = await page4Promise;
    await expect(page4).toHaveURL("https://blog.croper.com/");
}

}