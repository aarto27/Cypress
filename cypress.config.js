const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    viewportHeight: 1100,
    viewportWidth: 1920,
    pageLoadTimeout: 120000,
  },
});
