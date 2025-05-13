import {
    clickMultipleTimes
} from '../support/utils';

describe('FullTest', () => {
    it('FullTest', () => {
         // Visit homepage
         cy.visit("https://hometown.zetupstore.com/");
         cy.wait(2000);
 
         // Navigate to Register
         cy.get(".header-action-icon-2").find("span").contains("Login").click();
         cy.wait(2000);
         cy.get(".heading_s1").find("a").contains("Register here").click();
 
         // Fill registration form
         cy.get("#name").type("Sanchit");
         cy.get("#register-email").type("ssinghnarwat@gmail.com");
         cy.get("#register-contact").type("98750123");
         cy.get("#register-password").type("Sanchit@123");
         cy.get("#register-password-2").type("Sanchit@123");
         cy.get("#register-policy-2").click();
         cy.get(".mb-30").find("button").contains("Sign Up").click();
 
         // Login
         cy.get(".header-action-icon-2").find("span").contains("Login").click();
         cy.get("#email").type("ssinghnarwat@gmail.com");
         cy.get(".passwordvalidation").type("Sanchit#123");
         cy.get(".btn-heading").click();
 
         // Sign out
         cy.get(".header-action-icon-2").eq(2)
             .find(".cart-dropdown-wrap a")
             .contains("Sign out")
             .click({ force: true });
 
         // Login again with remember me
         cy.get("#email").type("ssinghnarwat@gmail.com");
         cy.get(".passwordvalidation").type("Sanchit#123");
         cy.get(".form-check-label").click();
         cy.get(".btn-heading").click();
 
         // Add product to cart and wishlist
         cy.get(".category-menu").eq(0).click();
         cy.get(".add-cart").eq(0).click();
         cy.wait(2000);
         cy.get(".attr19611").click();
         cy.get(".wishlist_119254").click();
         cy.get(".submit_text").click();
         cy.wait(2000);
 
         // Checkout process - First Address
         cy.get(".lable").eq(1).click();
         cy.wait(2000);
         cy.get(".w-100").contains("Proceed To CheckOut").click();
         cy.wait(2000);
         cy.get(".col-lg-12").find(".col-lg-6").eq(3).find("input").type("singh");
         cy.get(".col-lg-12").find(".col-lg-6").eq(5).find("input").type("98750123");
         cy.get("#autocomplete")
             .click()
             .type("PVR, Mall of Jaipur, Gandhi Path West, B Block, Vaishali Nagar, Jaipur, Rajasthan, India")
             .wait(1000)
             .focused()
             .type("{downarrow}{enter}");
         cy.get("#address").type("Gandhi Path West B Block Vaishali Nagar");
         cy.get(".col-lg-12").find(".col-lg-6").eq(6).find("input").type("Jaipur Division");
         cy.get(".col-lg-12").find(".col-lg-6").eq(7).find("input").type("Rajasthan");
         cy.get("#ship_country").should("contain", "India");
         cy.get(".form-check-label").eq(5).click();
         cy.get(".btn-text").click();
 
         // View Orders
         cy.get(".header-action-icon-2").eq(2)
             .find(".cart-dropdown-wrap a")
             .contains("Orders")
             .click({ force: true });
             cy.get(".table-responsive").find("a").eq(0).click();
 
         // Logout and try guest checkout
         cy.get(".nav-link").eq(3).should("contain", "Logout").click();
         cy.get(".breadcrumb .fi-rs-home").click();
 
         // Add product to cart again
         cy.get(".category-menu").eq(0).click();
         cy.get(".add-cart").eq(0).click();
         cy.wait(2000);
         cy.get(".attr19611").click();
         cy.get(".wishlist_119254").click();
         cy.get(".submit_text").click();
         cy.wait(2000);
 
         // Guest checkout
         cy.get(".lable").eq(1).click();
         cy.wait(2000);
         cy.get(".w-100").contains("Proceed To CheckOut").click();
         cy.wait(2000);
         cy.get(".col-lg-12").find(".col-lg-6").eq(2).find("input").type("Sanchit");
         cy.get(".col-lg-12").find(".col-lg-6").eq(3).find("input").type("singh");
         cy.get(".col-lg-12").find(".col-lg-6").eq(4).find("input").type("singh@gmail.com");
         cy.get(".col-lg-12").find(".col-lg-6").eq(5).find("input").type("98750123");
         cy.get("#autocomplete")
             .click()
             .type("PVR, Mall of Jaipur, Gandhi Path West, B Block, Vaishali Nagar, Jaipur, Rajasthan, India")
             .wait(1000)
             .focused()
             .type("{downarrow}{enter}");
         cy.get("#address").type("Gandhi Path West B Block Vaishali Nagar");
         cy.get(".col-lg-12").find(".col-lg-6").eq(6).find("input").type("Jaipur Division");
         cy.get(".col-lg-12").find(".col-lg-6").eq(7).find("input").type("Rajasthan");
         cy.get("#ship_country").should("contain", "India");
         cy.get(".form-check-label").eq(5).click();
         cy.get(".btn-text").click();
 
         // View Orders again
        //  cy.get(".header-action-icon-2").eq(2)
        //      .find(".cart-dropdown-wrap a")
        //      .contains("Orders")
        //      .click({ force: true });
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
        cy.get(".attr19613").click();
        cy.get(".wishlist_119225").click();
        cy.wait(2000);
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".breadcrumb .fi-rs-home").click();
        cy.wait(2000);
        cy.get(".category-menu").eq(0).click();
        cy.get(".add-cart").eq(0).click();
        cy.wait(2000);
        cy.get(".attr19611").click();
        cy.get(".attr19612").click();
        cy.get(".attr19613").click();
        cy.get(".attr19614").click();
        cy.get(".wishlist_119254").click();
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.wait(2000);
        cy.get(".detail-extralink-inner").find("input.qty-val").eq(0).clear().type("4{enter}");
        clickMultipleTimes(".cart-qty-up", 1, 4);
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-down", 0, 2);
        cy.wait(2000);
        cy.get(".category-menu").eq(1).click();
        cy.get(".add-cart").eq(3).click();
        cy.wait(2000);
        cy.get(".attr19611").click();
        cy.get(".attr19612").click();
        cy.get(".attr19613").click();
        clickMultipleTimes(".qty-up", 0, 4);
        cy.get(".wishlist_119246").click();
        cy.get(".submit_text").click();
        cy.wait(2000);
        cy.get(".lable").eq(1).click();
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-up", 1, 4);
        cy.wait(2000);
        clickMultipleTimes(".cart-qty-down", 1, 2);
        cy.wait(2000);
        cy.get(".text-center .btn-remove").eq(1).click();
        cy.wait(2000);
        cy.get(".breadcrumb .fi-rs-home").click();
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.get(".header-action-icon-2").find("span").contains("Wishlist").click()
        cy.wait(2000);
        cy.get(".btn-remove").find(".fi-rs-trash").eq(0).click();
        cy.get(".breadcrumb .fi-rs-home").click();
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
    })
});