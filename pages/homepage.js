// Inlcude playwright module
const { test, expect } = require('@playwright/test')
const qaTestData = require('../data/qa.json');
const prodTestData = require('../data/prod.json');
const { HeaderLinksPage } = require("../pages/headerslinkspage");
const{CardsPage} = require("../pages/cardspage");
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
        this.cartLink = page.getByRole('link', { name: 'Carrito' });
        this.registerBannerLink = page.getByRole('banner').getByRole('link', { name: 'Registrarse' });
        this.loginBannerLink = page.getByRole('banner').getByRole('link', { name: 'Iniciar sesión' });
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
        this.headersLinksPage = new HeaderLinksPage(page);
        this.cardsPage = new CardsPage(page);
    }

    async goto(){
        await this.page.setViewportSize({width:1366, height:728})
        await this.page.goto(process.env.URL);
    }

    async verifyElementsVisible() {
        await expect(this.specialOffersLink).toBeVisible();
        await expect(this.popover).toBeVisible();
        await expect(this.headersLinksPage.categoriesButton).toBeVisible();
        await expect(this.headersLinksPage.offersLink).toBeVisible();
        await expect(this.headersLinksPage.storesLink).toBeVisible();
        await expect(this.headersLinksPage.insurancesLink).toBeVisible();
        await expect(this.headersLinksPage.creditsButton).toBeVisible();
        await expect(this.headersLinksPage.productListsLink).toBeVisible();
        await expect(this.headersLinksPage.techPackagesLink).toBeVisible();
        await expect(this.headersLinksPage.sellLink).toBeVisible();
        await expect(this.headersLinksPage.managementLink).toBeVisible();
        await expect(this.headersLinksPage.newsMenuItemLink).toBeVisible();
        await expect(this.cartLink).toBeVisible();
        await expect(this.registerBannerLink).toBeVisible();
        await expect(this.loginBannerLink).toBeVisible();
        await expect(this.cardsPage.agriSuppliesLink).toBeVisible();
        await expect(this.cardsPage.finalProductsLink).toBeVisible();
        await expect(this.cardsPage.storeBranchesLink).toBeVisible();
        await expect(this.cardsPage.farmManagementLink).toBeVisible();
        await expect(this.cardsPage.creditLinesLink).toBeVisible();
        await expect(this.cardsPage.discountOffersLink).toBeVisible();
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