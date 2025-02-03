const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:true,
    pageLoadTimeout:60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      "loginURL":"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      "productSearchURL":"https://naveenautomationlabs.com/opencart/index.php?route=product/search",
      "wishlistproductURL":"https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40"
    }
  },
});
