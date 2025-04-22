export const clickMultipleTimes = (selector, index, times) => {
  for (let i = 0; i < times; i++) {
    cy.get(selector).eq(index).click();
  }
};