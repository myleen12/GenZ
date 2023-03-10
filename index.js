// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {renderLicenseBadge, renderLicenseLink} = require('./Develop/utils/generateBadge');
// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, contributing, tests, license, github, email, badge, licenseText}) =>
`# ${title}
  ${badge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${license}
${licenseText}

## Questions
-   https://github.com/${github}
-   Email:${email}`

inquirer
.prompt ([
    {
        type:'input',
        message: 'Please enter your projects title.',
        name: 'title',
    },
    {
        type:'input',
        message: 'Description of your project.',
        name: 'description',
    },{
        type:'input',
        message: 'Instruction for installation?',
        name: 'installation',
    },{
        type:'input',
        message: 'Instruction for usage',
        name: 'usage',
    },{
        type:'input',
        message: 'How to contributing?.',
        name: 'contributing',
    },{
        type:'input',
        message: 'test your application.',
        name: 'tests',
    },{
        type:'list',
        message: 'Please select license name.',
        name: 'license',
        choices: ['MIT', 'IBM', 'ISC', 'Mozilla']
    },{
        type:'input',
        message: 'Please enter your github username.',
        name: 'github',
    },{
        type:'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
])
.then((data) => {
data.badge = renderLicenseBadge(data.license),
data.licenseText = renderLicenseLink(data.license),
fs.writeFile('README-DEMO.md', questions(data), (err) => {
    err ? console.log(err) : console.log('Great Job!')
})})
