# E2ETestPlaywrightPOMCroper

## Descripción
This project utilizes Playwright in conjunction with POM, JavaScript, Allure to automate tests related to the challenge . It includes functionalities like verification of products, Api, petitions, URL verification, links verification, manual testing and bug reporting.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Bug Reporting](#bug-reporting)

  ## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper.git

   2. npm install dotenv --save
3. npm install playwright

4. Allure Report with Playwright [Screenshots, Videos & Traces]
Step1: Install Allure Report command-line tool

npm install --save-dev allure-commandline
Step2: Install the Allure Playwright adapter.

npm install --save-dev allure-playwright
Step3: Add below config in playwright.config.js file.

reporter:[
['html'],
['allure-playwright']
],
Step4: Run Playwright tests.

npx playwright test
Step5: Generate Allure Report

## usage

1. Playwright Report

npx playwright test

report generate 100 % coverage

![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/0c29d0b9-cabe-470d-8bfa-f0a1b6e42ef6)


![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/a89c03f9-4078-4ffd-b843-456fbef171ee)


![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/10321dd5-09bc-4abf-9b17-943254f323f1)


## project-structure

allure-results/:

Directorio donde se almacenan los resultados de las pruebas generados por Allure.
data/:

prod.json:
Datos de prueba específicos para el entorno de producción.
qa.json:
Datos de prueba específicos para el entorno de calidad.
Hooks/:

hooks.js:
Archivo que define los métodos auxiliares para las pruebas, como la verificación de respuestas y resultados de búsqueda.
node_modules/:

Contiene las dependencias instaladas del proyecto.
pages/:

cardspage.js:
Clase que define métodos para interactuar con los enlaces de las tarjetas en la página principal.
categoriespage.js:
Clase que define métodos para verificar y probar categorías de productos y sus respectivos modales.
creditspage.js:
Clase que define métodos para interactuar con el menú de créditos y sus enlaces.
headerslinkspage.js:
Clase que define métodos para interactuar con los enlaces del encabezado principal.
homepage.js:
Clase que define métodos para la página principal de Croper.
searchbarpage.js:
Clase que define métodos para realizar búsquedas de productos utilizando la barra de búsqueda.
playwright-report/:

data/:
Subdirectorio que contiene los datos de los reportes.
index.html:
Archivo HTML con el índice del reporte.
test-results/:

Directorio que contiene los resultados específicos de las pruebas.
tests/:

cards.spec.js:
Pruebas para verificar los enlaces de las tarjetas en la página principal.
homepageverify.spec.js:
Prueba para verificar la visibilidad de elementos en la página principal.
searchproduct.spec.js:
Pruebas para verificar la funcionalidad de búsqueda de productos.
verifyheaderslinks.spec.js:
Pruebas para verificar los enlaces del encabezado principal.
.env:

Archivo de configuración de variables de entorno.
.gitignore:

Archivos y directorios que Git debe ignorar.
package-lock.json:

Archivo que asegura instalaciones reproducibles, bloqueando las versiones de las dependencias.
package.json:

Contiene información del proyecto y las dependencias.
playwright.config.js:

Configuración global para las pruebas con Playwright.


## bug-reporting


## Bug Reporting

1. the filter "Busca lo que necesitas" is not working fine

### Steps to Reproduce:

1. Go to https://croper.com/.
2. Click in the searchbar "Busca lo que necesitas".
3. Write the word "filtro"
4. check the results in the filter

### Expected Behavior:

It is expected to bring valid results according to the filter, if you find "Filtro" just find this word

### Observed Behavior:

It is bringing you all types of search, words that do not match the filter


![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/e1cbeb9f-d143-42d4-a4d6-94b7e50e8c52)

![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/ff5fe27e-7546-41eb-9461-7143e5e414ca)



2. registration and login are not working.

### Steps to Reproduce:

1. Go to https://croper.com/.
2. Click in register or login
3. create a new usuario or login with you email
4. check the results

### Expected Behavior:

It is expected that you can register and log in without problems

### Observed Behavior:

- You currently can't do either.
- the captcha is displayed afther when you click in register, and no before


![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/259d5c45-e063-442c-9439-bb41a7db1cd9)



3. The elements are duplicated every time you hover in each category component

### Steps to Reproduce:

1. Go to https://croper.com/.
2. Click in categories
3. hover over the category components several times
4. check the modals

### Expected Behavior:

- The modal is expected to only be shown once when you hover over each component

- that the id is not duplicated every time you go through the component again

### Observed Behavior:

- The manners are being duplicated every time you go through the component several times.

![image](https://github.com/Yosmanovallos/E2ETestPlaywrightPOMCroper/assets/119948396/f00c432b-2274-47d8-adbb-7f0f36e18818)



