// Needed requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Variable that writes the readme file
const writeReadMe = util.promisify(fs.writeFile);

const selectedLicense = "";

// Moment to get the year
const moment = require('moment'); // require
const currentYear = moment().format('YYYY'); 

// function expression that runs inquirer which asks the user for the info
const userInputs = () =>
  inquirer.prompt([
    {
      // Your Full Name
      type: "input",
      name: "fullName",
      message: "What is your First and Last",
    },
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
      message: "What is the relative path for the screenshot of your project?",
    },
    {
      // Description of your project
      type: "input",
      name: "description",
      message: "Describe your project.",
    },
    {
      // Installation
      type: "input",
      name: "install",
      message: "Are there any requirements to run this Web App?",
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
    {
      //   List of License
      type: "list",
      name: "license",
      message: "Which license for this project?",
      choices: ["MIT", "GPLvs3", "Creative Commons Licenses"],
    },
  ]);

// Switch Statement for Badges

function getBadge(answers) {
  if (answers.license === "MIT") {
    selectedLicense =
      "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
  } else if (answers.license === "GPLvs3") {
    selectedLicense =
      "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
  } else if (answers.license === "Creative Commons Licenses") {
    selectedLicense =
      "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
  }
  return selectedLicense;
};

// function expression that writes the readme file
const readmeData = (answers) =>
  ` ${selectedLicense}
# ${answers.title}

> ${answers.briefDescription}

![](${answers.image})

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Links](#links)
- [Author Info](#author-info)

---

## Description
${answers.description}

---

## Installation
${answers.install}

---
[Back To The Top](#read-me-template)

## Technologies
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

---

## License

${answers.license}
Copyright (c) ${currentYear} ${answers.fullName}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
userInputs()
  .then((answers) => writeReadMe("generatedREADME.md", readmeData(answers)))
  // .then(getBadge(answers.license))
  .then("Success!")
  .catch((error) => console.log(error));
