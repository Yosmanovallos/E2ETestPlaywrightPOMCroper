const { test, expect } = require('@playwright/test')
const { HeaderLinksPage } = require("../pages/headerslinkspage");
const { Hooks } = require("../Hooks/hooks");
// create class
exports.CardsPage = class CardsPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
constructor(page){

    this.page = page;
    this.agriSuppliesLink = page.getByRole('link', { name: 'Insumos agrícolas Cotiza y' });
    this.finalProductsLink = page.getByRole('link', { name: 'Productos finales Encuentra' });
    this.storeBranchesLink = page.getByRole('link', { name: 'Tiendas Conoce las sucursales' });
    this.farmManagementLink = page.getByRole('link', { name: 'Gestión de fincas Administra' });
    this.creditLinesLink = page.getByRole('link', { name: 'Crédito Líneas hechas a la' });
    this.discountOffersLink = page.getByRole('link', { name: 'Oferta Conoce los descuentos' });
    this.hooks = new Hooks(page);

    // card AgriSupplies
}

    async AgriSuppliesLink(page) {
        await this.agriSuppliesLink.click();
        await expect(page).toHaveURL("https://croper.com/products?type=Insumo");
        await this.hooks.statusgriSupplies();
    }



     async FinalProductsLink(page) {
        await this.finalProductsLink.click();
        await expect(page).toHaveURL("https://croper.com/products?type=Producto%20final"); 
        await this.hooks.statusFinalProductsLink();
    }

     async StoreBranchesLink(page) {
        await this.storeBranchesLink.click();
        await expect(page).toHaveURL("https://croper.com/stores"); 
        await this.hooks.StatusStoreBranchesLink();
    }

     async FarmManagementLink(page) {
        await this.farmManagementLink.click();
        await expect(page).toHaveURL("https://croper.com/auth/login"); 
    }


     async CreditLinesLink(page) {
        await this.creditLinesLink.click();
        await expect(page).toHaveURL("https://croper.com/banks"); 
    }

    async DiscountOffersLink(page) {
        await this.discountOffersLink.click();
        await expect(page).toHaveURL("https://croper.com/offers"); 
        await this.hooks.StatusDiscountOffersLink();
    }
}




