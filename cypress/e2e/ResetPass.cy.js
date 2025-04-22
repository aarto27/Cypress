describe('ResetPass', () => {
    it('ResetPass', () => {
        cy.visit("https://hometown.zetupstore.com/");
        cy.wait(2000);
        cy.get(".header-action-icon-2").find("span").contains("Login").click();
        cy.get("#email").type("ssinghnarwat@gmail.com");
        cy.get(".passwordvalidation").type("Sanchit@123");
        cy.get(".form-check-label").click();
        cy.get(".btn-heading").click();
        cy.get(".header-action-icon-2").eq(2)
            .find(".cart-dropdown-wrap a")
            .contains("Settings")
            .click({
                force: true
            });
            cy.get("#account_last_name").type(" Narwat");
            cy.get("#password_current").type("Sanchit@123");
            cy.get("#password_1").type("Sanchit#123");
            cy.get("#password_2").type("Sanchit#123");
            cy.get(".btn-fill-out").click();
            cy.get(".header-action-icon-2").eq(2)
            .find(".cart-dropdown-wrap a")
            .contains("Sign out")
            .click({
                force: true
            });
            cy.get("#email").type("ssinghnarwat@gmail.com");
            cy.get(".passwordvalidation").type("Sanchit#123");
            cy.get(".form-check-label").click();
            cy.get(".btn-heading").click();
    });
});