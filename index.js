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
      {
        // ReadMe Title
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        // ReadMe Brief Description
        type: "input",
        name: "briefDescription",
        message: "Type in a brief description of you project.",
      },
      {
        // ReadMe Image
        type: "input",
        name: "image",
        message:
          "What is the relative path for the screenshot of your project?",
      },
      {
        // Description of your project
        type: "input",
        name: "description",
        message: "Describe your project.",
      },
      {
        // Readme Technologies
        type: "input",
        name: "tech",
        message: "What technologies were used in this project?",
      },
      {
        //   ReadMe how to use
        type: "input",
        name: "howToUse",
        message: "How do you use the Web App?",
      },
      {
        //   ReadMe link to site
        type: "input",
        name: "siteLink",
        message: "Type in the link to the site your app is running on:",
      },
      {
        //   ReadMe repo to site
        type: "input",
        name: "repo",
        message: "Type in the link to the repository your app located in:",
      },
      {
        //   ReadMe contact
        type: "input",
        name: "email",
        message: "What is your email address?",
      },

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
