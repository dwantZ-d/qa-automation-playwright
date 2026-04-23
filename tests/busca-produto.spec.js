const { test, expect } = require('@playwright/test');

test.describe('Fluxo de busca de produto', () => {

  test('Deve buscar um produto e exibir resultados', async ({ page }) => {
    
    await page.goto('https://www.mercadolivre.com.br');

    await expect(page).toHaveURL(/mercadolivre/);

    await page.fill('input[name="as_word"]', 'notebook');

    await page.press('input[name="as_word"]', 'Enter');

    await expect(page).toHaveURL(/notebook/);

    await page.waitForSelector('ol.ui-search-layout', { timeout: 10000 });

    await page.waitForSelector('ol.ui-search-layout');

    const resultados = page.locator('ol.ui-search-layout li');

    await expect(resultados.first()).toBeVisible();
  });

});

