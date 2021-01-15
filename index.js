// Needed requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Variable that writes the readme file
const writeReadMe = util.promisify(fs.writeFile);

// expression function that runs inquirer

const userInputs = () =>
  inquirer

    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
