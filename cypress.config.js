const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: 'fr6xeg',
  //projectId: "7hxuzw",
  projectId: "r2ai3b",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypress - report',
    embeddedScreenshots: true,
    html: true,
    
    inlineAssets: true,
    saveAllAttempts: true,
    screenshots: true,
    experimentalMemoryManagement:true,
    //Cypress.config('defaultCommandTimeout', 10000);
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});