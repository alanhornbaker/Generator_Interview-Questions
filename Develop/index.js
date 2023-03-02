// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  const questions = [
    {
      type: "input",
      name: "position",
      message: "What it is the title of the position you are applying for?",
    },
    {
      type: "input",
      name: "responsibilities",
      message:
        "What output, duties, and/or responsibilties are associated with the role? (Copy and paste if desired",
    },
    {
      type: "input",
      name: "firm",
      message: "What it is name of the firm advertising this position?",
    },
    {
      type: "input",
      name: "industry",
      message: "What industry is this firm operating in?",
    },
    {
      type: "input",
      name: "product",
      message:
        "What is this firm, or this segmet of this firm, producing?  What need does that produce meet?",
    },
    {
      type: "input",
      name: "consumer",
      message: "Who buys what is being produced? Why?",
    },
    {
      type: "input",
      name: "competition",
      message:
        "What other firms are active in the industry, that this firm is competing against?",
    },
    {
      type: "input",
      name: "tech-current",
      message:
        "What technologies appeared 1-5 years ago that have brought in industry to it's current state? What other factors have shaped in industry in that time frame?",
    },
    {
      type: "input",
      name: "tech-disruptive",
      message:
        "What technologies have appeared in the last 6-12 months that are reshaping the competitive environment?  Who/what is rocking the boat?",
    },
    {
      type: "input",
      name: "leglislation",
      message: "How is this industry dependant on legslation and politics?",
    },
    {
      type: "input",
      name: "other-dependencies",
      message: "What other factors influence this industry? (Environmental, etc)",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = `
# ${data.title}
## Table of Contents
1.[Description and Purpose](#description)

2.[Installation](#installation)

3.[Usage](#usage)

4.[Contribution](#contribution)

5.[License](#license)

6.[Questions](#questions)

## Description
${data.description}

${data.purpose}

## Installation
You can install this application by forking the repository from github.com/${data.githubUsername}/${data.repoName} and opening the repository in your text editor.  You will also want the LTS version of NPM so the node works.

## Usage
Functions that you will use to to use the application once you have installed it: 
${data.use}

## Contribution
You can contribute to this application by opening a pull request at github.com/${data.githubUsername}/${data.repoName}.  Currently there are no rules or standards for contribution.

## License
${data.license}

## Questions
Known erros and other issues can be raised to the repository on github at github.com/${data.githubUsername}/${data.repoName} , or can be sent to my github profile at github.com/${data.githubUsername}. As last resort, questions can be emailed to me directly at ${data.email}
    `;
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md file generated successfully`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}
// Function call to initialize app
init();
