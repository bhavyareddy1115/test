import { Page } from '@playwright/test';

export class AmazonPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToAmazon(): Promise<void> {
        await this.page.goto('https://www.amazon.com');
    }

    async fillSearchField(): Promise<void> {
        await this.page.getByRole('searchbox', { name: 'Search Amazon' }).fill('Wireless Mouse');
    }

    async clickSearchButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Go', exact: true }).click();
    }

    async selectProduct(): Promise<void> {
        await this.page.getByRole('link', { name: 'Logitech M185 Wireless Mouse, 2.4GHz with USB Mini Receiver, 12-Month Battery Life, 1000 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Swift Grey', exact: true }).click();
    }

    async addToCart(): Promise<void> {
        await this.page.getByRole('button', { name: 'Add to cart', exact: true }).click();
    }
}
