import { test as base, expect } from '@playwright/test';
import { AmazonPage } from '../pages/AmazonPage';

base.describe('Amazon Shopping Cart', () => {
    let amazonPage: AmazonPage;

    base.beforeEach(async ({ page }) => {
        amazonPage = new AmazonPage(page);
        await amazonPage.navigateToAmazon();
    });

    base.afterEach(async ({ page }) => {
        // Add any teardown steps if necessary
    });

    base('should add a wireless mouse to the cart', async ({ page }) => {
        await amazonPage.fillSearchField('Wireless Mouse');
        await amazonPage.clickSearchButton();
        await amazonPage.selectProduct();
        await amazonPage.addToCart();

        // Verify the product is added to the cart
        await page.goto('https://www.amazon.com/gp/cart/view.html');
        const cartItem = await page.getByRole('link', { name: 'Logitech M185 Wireless Mouse, 2.4GHz with USB Mini Receiver, 12-Month Battery Life, 1000 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Swift Grey', exact: true });
        expect(cartItem).not.toBeNull();

        const quantity = await page.getByRole('spinbutton', { name: 'Quantity' }).inputValue();
        expect(quantity).toBe('1');
    });
});
