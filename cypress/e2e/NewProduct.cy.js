describe('login', () => {
  it('login', () => {
    cy.visit("https://supermart.zetupstore.com/login");
    cy.get("#email").type("firstseller@supermart.com");
    cy.get("#password").type("firstseller@supermart.com");
    cy.get(".btn-primary").click();
    cy.get(".sidebar-menu .dropdown").eq(1).click();
    cy.get(".dropdown-menu li a").eq(1).click();
    cy.get(".card-body").contains("Add Product").click();
    cy.get(".card-body .form-control").eq(0).type("Kurta");
    cy.get(".card-body .form-control").eq(1).type("8989");
    cy.get(".card-body .form-control").eq(2).type("8989");
    cy.get(".card-body .form-control").eq(4).type("2025-04-10");
    cy.get(".card-body .form-control").eq(5).type("2025-04-10");
    cy.get(".card-body .form-control").eq(6).type("ABC-123");
    cy.get(".card-body .form-control").eq(7).type("10000");
    cy.get("#submit_btn").click();
    cy.get('label.switch')
      .contains("Published")
      .parent()
      .find('input[type="checkbox"]')
      .then(($input) => {
        if (!$input.prop("checked")) {
          cy.wrap($input).click({
            force: true
          });
        }
      });
    cy.get(".cart-dropdown-wrap").invoke("css", "display", "block");

    cy.get(".cart-dropdown-wrap a")
      .contains("Sign out")
      .click();

  });
})