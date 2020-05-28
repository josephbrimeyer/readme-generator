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
## Installation
${data.installation}
## Usage 
${data.usage}
## Credits
${data.credits}
## License 
${data.license}
## Badges 
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
${data.badge}
## Tests
${data.tests}
## Contributing
[Contribution Covenant](https://www.contributor-covenant.org/) 
## GitHub Link
https://www.github.com/${data.githubUserName}/
## GitHub Email 
${data.githubEmail} 

`;
}

module.exports = generateMarkdown;
