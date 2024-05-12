
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


}