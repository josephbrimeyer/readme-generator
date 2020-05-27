let inquirer = require("inquirer");
let fs = require('fs');
let path = require('path');
let generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Enter a detailed description for your project."
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Enter a table of contents for this project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use."
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators and any third-party assets."
  },
  {
    type: "list",
    message: "What license would you like to use for this project?",
    name: "license",
    choices: [
      "MIT",
      "Apache",
      "GNU",
      "Mozilla"
    ]
  },
  {
    type: "list",
    message: "Select a badge to use for the project.",
    name: "badge",
    choices: [
      "Badge1",
      "Badge2",
      "Badge3",
      "Badge4",
    ]
  },
  {
    type: "input",
    name: "tests",
    message: "What tests have you run on the application?"
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter your GitHub user name."
  },
  {
    type: "input",
    name: "githubEmail",
    message: "Enter your GitHub email address."
  },


]).then(function (data) {

  let markdownString = generateMarkdown(data)
  console.log(markdownString);
  const pathToReadMeFile = path.join(__dirname, "myReadMe.md");

  fs.writeFile(pathToReadMeFile, markdownString, function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
  // };
});

