describe('cart', () => {
    it('cart', () => {
        cy.visit("https://hometown.zetupstore.com/");
        cy.get(".cart-trending_products_area-119254").click();
        cy.wait(2000);
        cy.get(".cart-trending_products_area-119252").click();
        cy.wait(2000);
        cy.get(".cart-trending_products_area-119253").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.get(".tr-class").find(".btn-remove").eq(0).click();
        cy.get(".tr-class").find(".cart-qty-up").eq(0).click();
        cy.get(".breadcrumb .mr-5").click();
        cy.get(".wishlist_119252").eq(0)
        .find(".fi-rs-heart")
        .click({ force: true });
    });
});