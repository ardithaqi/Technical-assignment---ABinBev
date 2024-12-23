const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  env: {
    ...process.env,
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsxg}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
