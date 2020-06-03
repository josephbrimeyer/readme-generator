function generateMarkdown(data) {
  return `
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
* [Email](#email) 
## Installation
To install the necessary dependencies, run the following command:
${data.installation}
## Usage 
${data.usage}
## Credits
${data.credits}
## License 
This product is licensed under the ${data.license} license.
## Badges 
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
## Tests
${data.tests}
## Contributing
[Contribution Covenant](https://www.contributor-covenant.org/) 
## GitHub Link
https://www.github.com/${data.githubUserName}/
## Email 
${data.email} 
`;
}

module.exports = generateMarkdown;
