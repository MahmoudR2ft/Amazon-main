const { defineConfig } = require("cypress");
/// <reference types="cypress" />

module.exports = defineConfig({
 viewportWidth: 1280,
 viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
     console.log(config) // see everything in here!

      // modify config values
      config.defaultCommandTimeout = 20000
      config.baseUrl = 'https://www.amazon.com/'

      // modify env var value
      config.env.ENVIRONMENT = 'Demo'

      // IMPORTANT return the updated config object
      return config

    },
  },
  
});


