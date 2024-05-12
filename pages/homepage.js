// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');
// create class
exports.HomePageCroper = class HomePageCroper {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;
        // Elements
        this.specialOffersLink = page.getByRole('link', { name: 'Ofertas especiales para tu' });
        this.popover = page.locator('#cp-popover-0');
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
        this.cartLink = page.getByRole('link', { name: 'Carrito' });
        this.registerBannerLink = page.getByRole('banner').getByRole('link', { name: 'Registrarse' });
        this.loginBannerLink = page.getByRole('banner').getByRole('link', { name: 'Iniciar sesión' });
        this.agriSuppliesLink = page.getByRole('link', { name: 'Insumos agrícolas Cotiza y' });
        this.finalProductsLink = page.getByRole('link', { name: 'Productos finales Encuentra' });
        this.storeBranchesLink = page.getByRole('link', { name: 'Tiendas Conoce las sucursales' });
        this.farmManagementLink = page.getByRole('link', { name: 'Gestión de fincas Administra' });
        this.creditLinesLink = page.getByRole('link', { name: 'Crédito Líneas hechas a la' });
        this.discountOffersLink = page.getByRole('link', { name: 'Oferta Conoce los descuentos' });
        this.nextProductSlideLabel = page.locator('cp-product-slide').getByLabel('Next');
        this.homeSection = page.locator('cp-home');
        this.faqLink = page.getByRole('link', { name: 'Preguntas frecuentes' });
        this.newsContentInfoLink = page.getByRole('contentinfo').getByRole('link', { name: 'Noticias' });
        this.helpLink = page.getByRole('link', { name: 'Ayuda' });
        this.termsConditionsLink = page.getByRole('link', { name: 'Términos y condiciones' });
        this.returnPolicyLink = page.getByRole('link', { name: 'Política de devoluciones' });
        this.privacyPolicyLink = page.getByRole('link', { name: 'Política de privacidad' });
        this.loginContentInfoLink = page.getByRole('contentinfo').getByRole('link', { name: 'Iniciar sesión' });
        this.registerContentInfoLink = page.getByRole('contentinfo').getByRole('link', { name: 'Registrarse' });
        this.passwordRecoveryLink = page.getByRole('link', { name: 'Recuperar contraseña' });
        this.supportLink = page.getByRole('link', { name: 'Soporte' });
        this.searchButton = page.getByRole('button', { name: 'Busca lo que necesitas' });
        this.testData = process.env.ENV === 'qa' ? qaTestData.qaTestData : prodTestData.prodTestData;
    }

    async goto(){
        await this.page.setViewportSize({width:1366, height:728})
        await this.page.goto(process.env.URL);
    }

    async verifyElementsVisible() {
        await expect(this.specialOffersLink).toBeVisible();
        await expect(this.popover).toBeVisible();
        await expect(this.categoriesButton).toBeVisible();
        await expect(this.offersLink).toBeVisible();
        await expect(this.storesLink).toBeVisible();
        await expect(this.insurancesLink).toBeVisible();
        await expect(this.creditsButton).toBeVisible();
        await expect(this.productListsLink).toBeVisible();
        await expect(this.techPackagesLink).toBeVisible();
        await expect(this.sellLink).toBeVisible();
        await expect(this.managementLink).toBeVisible();
        await expect(this.newsMenuItemLink).toBeVisible();
        await expect(this.cartLink).toBeVisible();
        await expect(this.registerBannerLink).toBeVisible();
        await expect(this.loginBannerLink).toBeVisible();
        await expect(this.agriSuppliesLink).toBeVisible();
        await expect(this.finalProductsLink).toBeVisible();
        await expect(this.storeBranchesLink).toBeVisible();
        await expect(this.farmManagementLink).toBeVisible();
        await expect(this.creditLinesLink).toBeVisible();
        await expect(this.discountOffersLink).toBeVisible();
        await expect(this.nextProductSlideLabel).toBeVisible();
        await expect(this.homeSection).toContainText('Encuentra en Croper');
        await expect(this.homeSection).toContainText('Categorías de Insumos agrícolas');
        await expect(this.homeSection).toContainText('Tiendas');
        await expect(this.homeSection).toContainText('Categorías de Productos finales');
        await expect(this.faqLink).toBeVisible();
        await expect(this.newsContentInfoLink).toBeVisible();
        await expect(this.helpLink).toBeVisible();
        await expect(this.termsConditionsLink).toBeVisible();
        await expect(this.returnPolicyLink).toBeVisible();
        await expect(this.privacyPolicyLink).toBeVisible();
        await expect(this.loginContentInfoLink).toBeVisible();
        await expect(this.registerContentInfoLink).toBeVisible();
        await expect(this.passwordRecoveryLink).toBeVisible();
        await expect(this.supportLink).toBeVisible();
        await expect(this.searchButton).toBeVisible();
      }

}    