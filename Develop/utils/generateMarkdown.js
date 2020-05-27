function generateMarkdown(data) {
  return `
# ${data.title}
## Description 
${data.description}
## Table of Contents 
${data.tableOfContents} 
## Installation
${data.installation}
## Usage 
${data.usage}
## Credits
${data.credits}
## License 
${data.license}
## Badges 
${data.badge}
## Tests
${data.tests}
## Contributing
[Contribution Covenant](https://www.contributor-covenant.org/) 
## GitHub User Name
${data.githubUserName}
## GitHub Email 
${data.githubEmail} 

`;
}

module.exports = generateMarkdown;
