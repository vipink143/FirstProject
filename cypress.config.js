const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    pageLoadTimeout:60000,
    experimentalSessionAndOrigin: true,
    reporter: 'cypress-mochawesome-reporter',

    reporterOptions: {
      reportDir: 'cypress/results/cypress-mochawesome-reporter', // Directory where reports will be saved
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss", // Adds timestamp to reports
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    env:{
      "loginURL":"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      "productSearchURL":"https://naveenautomationlabs.com/opencart/index.php?route=product/search",
      "wishlistproductURL":"https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40"
    }

    
  },
});

