import { clickMultipleTimes} from '../support/utils';

describe('ZetUpStore', () => {
    it('ZetUpStore', () => {
        cy.visit("https://hometown.zetupstore.com/");
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.wait(2000);
        cy.reload();
        cy.wait(2000);
        cy.get("#aa-search-input").type("Blooming Palms Dreamy Palms Flower Printed Top-pant Ensemble");
        cy.wait(2000);
        cy.get(".search-btn-header").click();
        cy.wait(2000);
        cy.get(".add-cart").click();
        cy.wait(2000);
        cy.get(".attr19612").click();
        cy.wait(2000);
        cy.get(".attr19613").click();
        cy.wait(2000);
        cy.get(".attr19614").click();
        cy.wait(2000);
        cy.get(".attr19615").click();
        cy.wait(2000);
        cy.get(".attr19616").click();
        cy.wait(2000);
        cy.get(".attr19617").click();
        cy.wait(2000);
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".breadcrumb .fi-rs-home").click();
        cy.wait(2000);
        cy.get(".category-menu").eq(0).click();
        cy.get(".add-cart").eq(0).click();
        cy.wait(2000);
        cy.get(".attr19611").click();
        cy.wait(2000);
        cy.get(".attr19612").click();
        cy.wait(2000);
        cy.get(".attr19613").click();
        cy.wait(2000);
        cy.get(".attr19614").click();
        cy.wait(2000);
        cy.get(".attr19615").click();
        cy.wait(2000);
        cy.get(".attr19616").click();
        cy.wait(2000);
        cy.get(".attr19617").click();
        cy.wait(2000);
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-up", 0, 4);
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-down", 0, 2);
        cy.wait(2000);
        cy.get(".category-menu").eq(1).click();
        cy.get(".add-cart").eq(3).click();
        cy.wait(2000);
        cy.get(".attr19611").click();
        cy.wait(2000);
        cy.get(".attr19612").click();
        cy.wait(2000);
        cy.get(".attr19613").click();
        cy.wait(2000);
        cy.get(".attr19614").click();
        cy.wait(2000);
        cy.get(".attr19615").click();
        cy.wait(2000);
        cy.get(".attr19616").click();
        cy.wait(2000);
        cy.get(".attr19617").click();
        cy.wait(2000);
        clickMultipleTimes(".qty-up", 0, 4);
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-up", 1, 4);
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-down", 1, 2);
        cy.wait(2000);
        cy.get(".text-center .btn-remove").eq(1).click();
        cy.get(".breadcrumb .fi-rs-home").click();
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.wait(2000);
        cy.reload();
    });
});