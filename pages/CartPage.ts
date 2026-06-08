import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeProduct(productName: string) {
    await this.page
      .locator('.cart_item')
      .filter({ hasText: productName })
      .getByRole('button')
      .click();
  }

  async verifyProductExists(productName: string) {
    await expect(this.page.locator(`text=${productName}`)).toBeVisible();
  }

  async verifyProductNotExists(productName: string) {
    await expect(this.page.locator(`text=${productName}`)).not.toBeVisible();
  }

  async clickCheckout() {
    await this.page.locator('#checkout').click();
  }
}