describe('ZetUpLogin', () => {
    it('ZetUpLogin', () => {
        cy.visit("https://hometown.zetupstore.com/");
        cy.wait(2000);
        cy.get(".header-action-icon-2").find("span").contains("Login").click();
        // cy.wait(2000);
        // cy.get(".heading_s1").find("a").contains("Register here").click();
        // cy.get("#name").type("Sanchit");
        // cy.get("#register-email").type("ssinghnarwat@gmail.com");
        // cy.get("#register-contact").type("98750123");
        // cy.get("#register-password").type("Sanchit@123");
        // cy.get("#register-password-2").type("Sanchit@123");
        // cy.get("#register-policy-2").click();
        // cy.get(".mb-30").find("button").contains("Sign Up").click();
        // cy.get(".header-action-icon-2").find("span").contains("Login").click();
        // cy.get("#email").type("ssinghnarwat@gmail.com");
        // cy.get(".passwordvalidation").type("Sanchit@123");
        // cy.get(".btn-heading").click();
        // cy.get(".header-action-icon-2").eq(2)
        //     .find(".cart-dropdown-wrap a")
        //     .contains("Sign out")
        //     .click({
        //         force: true
        //     });
        cy.get("#email").type("ssinghnarwat@gmail.com");
        cy.get(".passwordvalidation").type("Sanchit@123");
        cy.get(".btn-heading").click();
        cy.get(".category-menu").eq(0).click();
        cy.get(".add-cart").eq(0).click();
        cy.wait(2000);
        cy.get(".attr19611").click();
        cy.get(".wishlist_119254").click();
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.wait(2000);
        cy.get(".w-100").contains("Proceed To CheckOut").click();
        cy.wait(2000);
        cy.get(".col-lg-12").find(".col-lg-6").eq(3).find("input").type("singh");
        cy.get(".col-lg-12").find(".col-lg-6").eq(5).find("input").type("98750123");
        cy.get("#address").type("annexlogics system pvt. ltd");
        cy.get(".col-lg-12").find(".col-lg-6").eq(6).find("input").type("Rajasthan");
        cy.get(".col-lg-12").find(".col-lg-6").eq(7).find("input").type("Jaipur");
    });
});