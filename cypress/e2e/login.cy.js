describe('login', () => {
  it('login', () => {
    cy.visit("https://supermart.zetupstore.com/login");
    cy.get("#email").type("firstseller@supermart.com");
    cy.get("#password").type("firstseller@supermart.com");
    cy.get(".btn-primary").click();
    cy.wait(2000);
    cy.get(".sidebar-menu .dropdown").eq(0).click();
    cy.wait(6000);
    cy.get(".sidebar-menu .dropdown").eq(1).click();
    cy.wait(6000);
    cy.get(".sidebar-menu .dropdown").eq(2).click();
    cy.wait(6000);
    cy.get(".sidebar-menu .dropdown").eq(3).click();
    cy.wait(6000);
    cy.get("#navbar-collapse .avatar-online").eq(0).click();
    cy.get(".dropdown-menu-end").eq(0).contains("Logout").click();

  });
})