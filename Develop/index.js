// Importing inquirer, path, fs
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const generateHTML = 
// const Manager = require("./lib/manager");
// const Engineer = require("./lib/engineer");
// const Intern = require("./lib/intern");

const questions = async () => {

    return await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ])
}
// TODO: Create a function to write README file
const generateHTML = ({ name, id, email }) =>

// TODO: Create a function to initialize app
function init() {
    console.log('questions')
    questions()


// Use writeFileSync method to use promises instead of a callback function
.then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
.then(() => console.log('Successfully created index.html'))
.catch((err) => console.error(err));
  };
  
// Function call to initialize app
init();






// ------------------------------------------

// original code for the html
/// // TODO: Create a function to initialize app
// function init() {
//     console.log('questions')
//     questions()


//   .then((answers) => { const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
// // Function call to initialize app
// init();