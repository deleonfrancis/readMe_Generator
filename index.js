// Needed requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Variable that writes the readme file
const writeReadMe = util.promisify(fs.writeFile);

// function expression that runs inquirer which asks the user for the info
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
    ])

// function expression that writes the readme file
const readmeData = (answers) =>
`# ${answers.itle}

> ${answers.briefDescription}

![](${answers.image})

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Links](#links)
- [Author Info](#author-info)

---

## Description
${answers.description}

#### Technologies
${answers.tech}

[Back To The Top](#read-me-template)

---

## How To Use
${answers.howToUse}
   
   [Back To The Top](#read-me-template)
   
---

## Links

Link to site:
${answers.siteLink}

Link to GitHub repository:
${answers.repo}

[Back To The Top](#read-me-template)

---

## Author Info

- E-mail: ${answers.email}

[Back To The Top](#read-me-template)
`







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
