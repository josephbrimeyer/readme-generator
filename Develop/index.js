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
    message: "Enter a description for this project."
  },
  {
    type: "input",
    name: "table of contents",
    message: "Enter a table of contents for this project."
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation of this app."
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use the app."
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
    type: "input",
    name: "contributors",
    message: "Who contributed to the application?"
  },
  {
    type: "input",
    name: "tests",
    message: "What tests have you run on the application?"
  },
  {
    type: "input",
    name: "github user name",
    message: "Enter your GitHub user name."
  },
  {
    type: "input",
    name: "github email",
    message: "Enter your GitHub email address."
  },
  
  
]).then(function (data) {

   // function writeToFile(fileName, data) {
    // let filename = data.title.toLowerCase().split(' ').join('') + ".json";
  let markdownString = generateMarkdown (data) 
  const pathToReadMeFile = path.join(__dirname, "myReadMe.md");

    fs.writeFile(pathToReadMeFile, markdownString, function (err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");

    });
  // };
});

// function init() {

// }

// init();

