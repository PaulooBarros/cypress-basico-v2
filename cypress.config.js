// cypress.config.js
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 960,
    baseUrl: 'http://127.0.0.1:5500', // Certifique-se de que essa URL está correta
  },
};
