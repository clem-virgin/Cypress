const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
   // baseUrl: "https://parabank.parasoft.com/parabank",
   // baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
