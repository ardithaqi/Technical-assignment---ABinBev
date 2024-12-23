const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  env: {
    ...process.env,
  },

  e2e: {
    retries: {
      runMode: 2, // Retries when running in headless mode
      openMode: 0, // No retries in interactive mode
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsxg}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
