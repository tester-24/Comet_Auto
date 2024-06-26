const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: 'fr6xeg',
  //projectId: "7hxuzw",
  projectId: "4z9d3u",
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
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});