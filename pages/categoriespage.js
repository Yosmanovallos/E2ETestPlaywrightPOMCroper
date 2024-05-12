const { test, expect } = require('@playwright/test')
const { HeaderLinksPage } = require("../pages/headerslinkspage");
// create class
exports.CategoriesPage = class CategoriesPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
constructor(page){
this.categoriesButton = page.getByRole('button', { name: 'Categorías' });
this.headersLinksPage = new HeaderLinksPage(page);
this.fertilizantesButton = page.getByRole('button', { name: 'Fertilizantes y enmiendas' });
this.proteccionCultivosButton = page.getByRole('button', { name: 'Protección de cultivos' });
this.bioinsumosButton = page.getByRole('button', { name: 'Bioinsumos' });
this.herramientasEquiposButton = page.getByRole('button', { name: 'Herramientas y Equipos' });
this.farmaciaVeterinariaButton = page.getByRole('button', { name: 'Farmacia y veterinaria' });
this.semillasButton = page.getByRole('button', { name: 'Semillas' });
this.maquinariaAgricolaButton = page.getByRole('button', { name: 'Maquinaria Agrícola' });
this.riegoAguasButton = page.getByRole('button', { name: 'Riego y aguas' });
this.infraestructuraButton = page.getByRole('button', { name: 'Infraestructura' });
this.nutricionAnimalButton = page.getByRole('button', { name: 'Nutrición animal' });
this.reproduccionGeneticaButton = page.getByRole('button', { name: 'Reproducción y genética' });
this.maquinariaAgroindustrialButton = page.getByRole('button', { name: 'Maquinaria Agroindustrial' });
this.tecnologiaButton = page.getByRole('button', { name: 'Tecnología' });
this.autosCamionesMotosButton = page.getByRole('button', { name: 'Autos, camiones y motos' });
this.serviciosButton = page.getByRole('button', { name: 'Servicios' });
this.repuestosButton = page.getByRole('button', { name: 'Repuestos' });
this.mascotasButton = page.getByRole('button', { name: 'Mascotas' });
this.creditosFinanciamientoButton = page.getByRole('button', { name: 'Créditos y financiamiento (' });
this.transporteLogisticaButton = page.getByRole('button', { name: 'Transporte y logística' });
this.cafeButton = page.getByRole('button', { name: 'Café' });
this.cacaoButton = page.getByRole('button', { name: 'Cacao' });
this.frutasButton = page.getByRole('button', { name: 'Frutas' });
this.verdurasButton = page.getByRole('button', { name: 'Verduras' });
this.procesadosButton = page.getByRole('button', { name: 'Procesados' });
this.floresButton = page.getByRole('button', { name: 'Flores' });
this.animalesButton = page.getByRole('button', { name: 'Animales' });
this.granosCerealesButton = page.getByRole('button', { name: 'Granos y cereales' });
this.especiasButton = page.getByRole('button', { name: 'Especias' });


/////Locators for modals

this.fertilizantesModal = page.locator('#cdk-overlay-2');
this.proteccionCultivosModal = page.locator('#cdk-overlay-3');
this.bioinsumosModal = page.locator('#cdk-overlay-4');
this.herramientasEquiposModal = page.locator('#cdk-overlay-5');
this.farmaciaVeterinariaModal = page.locator('#cdk-overlay-6');
this.semillasModal = page.locator('#cdk-overlay-7');
this.maquinariaAgricolaModal = page.locator('#cdk-overlay-8');
this.riegoAguasModal = page.locator('#cdk-overlay-9');
this.infraestructuraModal = page.locator('#cdk-overlay-10');
this.nutricionAnimalModal = page.locator('#cdk-overlay-11');
this.reproduccionGeneticaModal = page.locator('#cdk-overlay-12');
this.maquinariaAgroindustrialModal = page.locator('#cdk-overlay-13');
this.tecnologiaModal = page.locator('#cdk-overlay-14');
this.autosCamionesMotosModal = page.locator('#cdk-overlay-15');
this.serviciosModal = page.locator('#cdk-overlay-16');
this.repuestosModal = page.locator('#cdk-overlay-17');
this.mascotasModal = page.locator('#cdk-overlay-18');
this.creditosFinanciamientoModal = page.locator('#cdk-overlay-19');
this.transporteLogisticaModal = page.locator('#cdk-overlay-20');
this.cafeModal = page.locator('#cdk-overlay-21');
this.cacaoModal = page.locator('#cdk-overlay-22');
this.frutasModal = page.locator('#cdk-overlay-23');
this.verdurasModal = page.locator('#cdk-overlay-24');
this.procesadosModal = page.locator('#cdk-overlay-25');
this.floresModal = page.locator('#cdk-overlay-26');
this.animalesModal = page.locator('#cdk-overlay-27');
this.granosCerealesModal = page.locator('#cdk-overlay-28');
this.especiasModal = page.locator('#cdk-overlay-29');



}


async CategoriesVerify() {
    await this.headersLinksPage.categoriesButton.click();
    await expect(this.fertilizantesButton).toBeVisible();
    await expect(this.proteccionCultivosButton).toBeVisible();
    await expect(this.bioinsumosButton).toBeVisible();
    await expect(this.herramientasEquiposButton).toBeVisible();
    await expect(this.farmaciaVeterinariaButton).toBeVisible();
    await expect(this.semillasButton).toBeVisible();
    await expect(this.maquinariaAgricolaButton).toBeVisible();
    await expect(this.riegoAguasButton).toBeVisible();
    await expect(this.infraestructuraButton).toBeVisible();
    await expect(this.nutricionAnimalButton).toBeVisible();
    await expect(this.reproduccionGeneticaButton).toBeVisible();
    await expect(this.maquinariaAgroindustrialButton).toBeVisible();
    await expect(this.tecnologiaButton).toBeVisible();
    await expect(this.autosCamionesMotosButton).toBeVisible();
    await expect(this.serviciosButton).toBeVisible();
    await expect(this.repuestosButton).toBeVisible();
    await expect(this.mascotasButton).toBeVisible();
    await expect(this.creditosFinanciamientoButton).toBeVisible();
    await expect(this.transporteLogisticaButton).toBeVisible();
    await expect(this.cafeButton).toBeVisible();
    await expect(this.cacaoButton).toBeVisible();
    await expect(this.frutasButton).toBeVisible();
    await expect(this.verdurasButton).toBeVisible();
    await expect(this.procesadosButton).toBeVisible();
    await expect(this.floresButton).toBeVisible();
    await expect(this.animalesButton).toBeVisible();
    await expect(this.granosCerealesButton).toBeVisible();
    await expect(this.especiasButton).toBeVisible();
}

async CategoriesCheckModals() {

    await this.headersLinksPage.categoriesButton.click();
        
    await this.fertilizantesButton.hover();
    await expect(this.fertilizantesModal).toBeVisible();

    await this.proteccionCultivosButton.hover();
    await expect(this.proteccionCultivosModal).toBeVisible();

    await this.bioinsumosButton.hover();
    await expect(this.bioinsumosModal).toBeVisible();

    await this.herramientasEquiposButton.hover();
    await expect(this.herramientasEquiposModal).toBeVisible();
  
    await this.farmaciaVeterinariaButton.hover();
    await expect(this.farmaciaVeterinariaModal).toBeVisible();
 
    await this.semillasButton.hover();
    await expect(this.semillasModal).toBeVisible();

    await this.maquinariaAgricolaButton.hover();
    await expect(this.maquinariaAgricolaModal).toBeVisible();

    await expect(this.riegoAguasButton).toBeVisible();
    await this.riegoAguasButton.hover();
    await expect(this.riegoAguasModal).toBeVisible();
  
    await expect(this.infraestructuraButton).toBeVisible();
    await this.infraestructuraButton.hover();
    await expect(this.infraestructuraModal).toBeVisible();

    await this.nutricionAnimalButton.hover();
    await expect(this.nutricionAnimalModal).toBeVisible();

    await this.reproduccionGeneticaButton.hover();
    await expect(this.reproduccionGeneticaModal).toBeVisible();

    await this.maquinariaAgroindustrialButton.hover();
    await expect(this.maquinariaAgroindustrialModal).toBeVisible();

    await this.tecnologiaButton.hover();
    await expect(this.tecnologiaModal).toBeVisible();

    await this.autosCamionesMotosButton.hover();
    await expect(this.autosCamionesMotosModal).toBeVisible();

    await this.serviciosButton.hover();
    await expect(this.serviciosModal).toBeVisible();

    await this.repuestosButton.hover();
    await expect(this.repuestosModal).toBeVisible();

    await this.mascotasButton.hover();
    await expect(this.mascotasModal).toBeVisible();

    await this.creditosFinanciamientoButton.hover();
    await expect(this.creditosFinanciamientoModal).toBeVisible();

    await this.transporteLogisticaButton.hover();
    await expect(this.transporteLogisticaModal).toBeVisible();

    await this.cafeButton.hover();
    await expect(this.cafeModal).toBeVisible();

    await this.cacaoButton.hover();
    await expect(this.cacaoModal).toBeVisible();

    await this.frutasButton.hover();
    await expect(this.frutasModal).toBeVisible();

    await this.verdurasButton.hover();
    await expect(this.verdurasModal).toBeVisible();
 
    await this.procesadosButton.hover();
    await expect(this.procesadosModal).toBeVisible();

    await this.floresButton.hover();
    await expect(this.floresModal).toBeVisible();
 
    await this.animalesButton.hover();
    await expect(this.animalesModal).toBeVisible();

    await this.granosCerealesButton.hover();
    await expect(this.granosCerealesModal).toBeVisible();

    await this.especiasButton.hover();
    await expect(this.especiasModal).toBeVisible();
}

}