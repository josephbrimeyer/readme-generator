function generateMarkdown(data) {
  return `
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
# ${data.title}
## Description 
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Contributing](#contributing)
* [GitHub](#github)
* [Email](#email) 
## Installation
To install the necessary dependencies, run the following command:
${data.installation}
## Usage 
${data.usage}
![Demo](./utils/readme-generator.gif)
## Credits
${data.credits}
## License 
This product is licensed under the ${data.license} license.
## Tests
${data.tests}
## Contributing
[Contribution Covenant](https://www.contributor-covenant.org/) 
## GitHub 
https://www.github.com/${data.githubUserName}/readme-generator/
## Email 
${data.email} 
`;
}

module.exports = generateMarkdown;
