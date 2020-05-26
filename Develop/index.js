// need to install inquirer npm and learn how to use it to get the readme data.
// examples 13, 14, and 15 have sample code on how to write to a json file, here we will write to an md file.

let inquirer = require("inquirer");
let fs = require('fs');

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
    name: "GitHubUserId",
    message: "Enter your GitHub user id."
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation of this app."
  },
  
]).then(function (data) {

  // function writeToFile(fileName, data) {
    let filename = data.title.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

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

