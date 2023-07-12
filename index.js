var inquirer = require('inquirer');
var fs = require('fs');

var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'Please enter your first and last name?',
        name: 'nameInput'
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
        choices: ['MIT','Apache 2.0','ISC','GNU General Public License v3.0','GNU General Public License v2.0'],
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
    writeAnswersToREADME (answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  function writeAnswersToREADME (answers) {
    var name = answers.nameInput
    var title = answers.titleQuestionInput
    var description = answers.descriptionInput
    var installation = answers.installationInput
    var usage = answers.usageInput
    var contribution = answers.contributionInput
    var test = answers.testInput
    var license = answers.licenseInput
    var github = answers.githubInput
    var email = answers.emailInput

    var readmeToWrite = 

    fs.writeFile('newreadme.md', answers.nameInput, error => error ? console.log(error) : console.log('success'));
  }