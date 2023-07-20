var inquirer = require('inquirer');
var fs = require('fs');

var inquirer = require('inquirer');
inquirer
  .prompt([
    // Input questions for user
    {
      type: 'input',
      message: 'Please enter your first name?',
      name: 'firstNameInput'
    },
    {
      type: 'input',
      message: 'Please enter your last name?',
      name: 'lastNameInput'
    },
    {
      type: 'input',
      message: 'Please enter the title of your README?',
      name: 'titleQuestionInput'
    },
    {
      type: 'input',
      message: 'Please enter the description of your README?',
      name: 'descriptionInput'
    },
    {
      type: 'input',
      message: 'Please enter the installation instructions of your README?',
      name: 'installationInput'
    },
    {
      type: 'input',
      message: 'Please enter the usage information of your README.',
      name: 'usageInput'
    },
    {
      type: 'input',
      message: 'Please enter the contribution guidelines of your README.',
      name: 'contributionInput'
    },
    {
      type: 'input',
      message: 'Please enter the test instructions of your README.',
      name: 'testInput'
    },
    {
      type: 'list',
      message: 'Please select a license.',
      name: 'licenseInput',
      choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'githubInput'
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'emailInput'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    console.log(answers.licenseInput);


    writeAnswersToREADME(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
  

function writeAnswersToREADME(answers) {
  var firstName = answers.firstNameInput;
  var lastName = answers.lastNameInput;
  var title = answers.titleQuestionInput;
  var description = answers.descriptionInput;
  var installation = answers.installationInput;
  var usage = answers.usageInput;
  var contribution = answers.contributionInput;
  var test = answers.testInput;
  var license = answers.licenseInput;
  var github = answers.githubInput;
  var email = answers.emailInput;
  var displayBadge = function(license) {
    if (license === "MIT") {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'Mozilla Public License 2.0') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'GNU General Public License v3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'GNU General Public License v2.0') {
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    } else {
      return '';
    }
  };
  var badge = displayBadge(license);
  var readmeToWrite =
`
# ${title}

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact-information)

## Installation

${installation}

## Usage

${usage}

## License

${badge} ${license}

## How to Contribute

${contribution}

## Tests

${test}

## Contact Information
Created by: ${firstName} ${lastName}
${github}
${email}
`

  fs.writeFile('newreadme.md', readmeToWrite, error => error ? console.log(error) : console.log('success'));
}