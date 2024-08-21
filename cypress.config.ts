import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://digital.brochure.tkelevator.com/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/cover-11",
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    video: true,
    trashAssetsBeforeRuns: false,
    testIsolation: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});