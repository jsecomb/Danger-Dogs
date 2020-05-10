function generateMarkdown(response, profile) {

    return `# ${response.title} by ${profile.data.name} 
    
    [![HitCount](http://hits.dwyl.com/{${response.username}}/{${response.title}}.svg)](http://hits.dwyl.com/{${response.username}}/{${response.title}})
    ![GitHub top language](https://img.shields.io/github/languages/top/${response.username}/${response.title}?style=flat-square)
    ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${response.username}/${response.title}?style=flat-square)
    
    ## Description: 
    
    ${response.description}
    
    ---
    
    ## Table of Contents:
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Resources](#resources)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ---
    
    ## Istallation: 
    
    (Describe how to install application here)
    
    ---
    
    ## Usage: 
    
    (Describe how to use application here)
    
    ---
    
    ## License: 
    
    Please contact ${profile.data.name} (contact info below) regarding licensing.
    
    Copyright © ${response.year} ${profile.data.name}
    
    ---
    
    ## Contributing:
    
    Please contact ${profile.data.name} (contact info below) regarding contributions.
    
    ---
    
    ## Resources:
    
    (Describe resources used here)
    
    ---
    
    ## Tests:
    
    (Describe resources used here)
    
    ---
    
    ## Questions:
    
    If you have any questions, please contact ${profile.data.name} at ${profile.data.email};
    
    <img src="${profile.data.avatar_url}" alt="${response.username}"/>`
    }
    
    module.exports = generateMarkdown;