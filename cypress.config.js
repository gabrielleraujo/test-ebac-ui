const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "5qrnfv",
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    } 
  },
});
