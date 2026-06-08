import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.fill('#first-name', firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.fill('#last-name', lastName);
  }

  async enterPostalCode(postalCode: string) {
    await this.page.fill('#postal-code', postalCode);
  }

  async clickContinue() {
    await this.page.click('#continue');
  }

  async clickFinish() {
    await this.page.click('#finish');
  }

  async verifyOrderSuccess() {
    await expect(
      this.page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');
  }

  async verifyError(message: string) {
    await expect(
      this.page.locator('[data-test="error"]')
    ).toContainText(message);
  }
}