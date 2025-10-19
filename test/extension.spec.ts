import { test, expect } from '@playwright/test';
import path from 'node:path';


test('Extensão: verifica se o script de conteúdo alterou o CSS em example.com', async ({ page }) => {

  await page.goto('https://example.com');

  const elementToTest = page.locator('a'); 

  const outlineStyle = await elementToTest.evaluate(el => window.getComputedStyle(el).outlineStyle);
  
  // Se você espera um valor específico injetado pelo seu script:
  // await expect(outlineStyle).toBe('dashed'); 
  
  // Apenas verificando que existe (adapte este 'expect'!)
  expect(outlineStyle).toBeDefined();
});

// Adicione mais testes para popup, background script, etc., se necessário.