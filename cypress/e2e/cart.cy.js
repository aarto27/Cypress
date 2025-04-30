describe('cart', () => {
    it('cart', () => {
        cy.visit("https://hometown.zetupstore.com/");
        cy.get(".cart-trending_products_area-119254").click();
        cy.wait(2000);
        cy.get(".wishlist_119252").eq(0)
            .find(".fi-rs-heart")
            .click({
                force: true
            });
        cy.get(".cart-trending_products_area-119252").click();
        cy.wait(2000);
        cy.get(".cart-trending_products_area-119253").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.get(".tr-class").find(".btn-remove").eq(0).click();
        cy.get(".tr-class").find(".cart-qty-up").eq(0).click();
        cy.wait(2000);
        cy.get('.breadcrumb a').contains('Home').click();
        cy.get(".mini-cart-icon").eq(0).click();
        cy.get(".btn-remove").find(".fi-rs-trash").eq(0).click();
        cy.wait(2000);
        cy.get('.breadcrumb a').contains('Home').click();
        cy.get(".toggle_info").click();
        cy.get("#autocomplete")
            .click()
            .clear()
            .type("PVR, Mall of Jaipur, Gandhi Path West, B Block, Vaishali Nagar, Jaipur, Rajasthan, India")
            .wait(1000)
            // .focused()
            .type("{downarrow}{enter}");
        cy.get(".modal-content ").find(".confirm-btn").click();


    });
});