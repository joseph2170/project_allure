import { Browser, BrowserContext, chromium, Page } from '@playwright/test';

export const fixture = {
  page: undefined as unknown as Page,
  context: undefined as unknown as BrowserContext,
  browser: undefined as unknown as Browser,
};

export async function launchBrowser() {
  fixture.browser = await chromium.launch({
    headless: false,
  });

  fixture.context = await fixture.browser.newContext();

  fixture.page = await fixture.context.newPage();
}

export async function closeBrowser() {
  await fixture.page.close();
  await fixture.context.close();
  await fixture.browser.close();
}