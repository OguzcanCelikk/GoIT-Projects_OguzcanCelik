const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter"); // Yol güncellendi!

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kitapsepeti.com',
    viewportWidth: 1280, // Terminal modunda daha stabil sonuç için
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
});