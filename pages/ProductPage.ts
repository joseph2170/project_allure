import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addProduct(productName: string) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button')
      .click();
  }

  async clickCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async sortProduct(option: string) {
    await this.page.locator('.product_sort_container').selectOption({
      label: option,
    });
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator(`text=${productName}`)).toBeVisible();
  }
}