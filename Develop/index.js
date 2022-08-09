const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises 
// Manager questions

const questionsManager = () => {
  return inquirer.prompt([
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
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your position?',
    },
    {
      type: 'list',
      name: 'teamMembers',
      message: 'Would you like to add more team members?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'list',
      name: 'team',
      message: 'Who would you like to add?',
      choices: ['Engineer', 'Intern'],
    },
  ]);
};

const generateHTML = ({ name, id, email, officeNumber, role}) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--link to bootstrap-->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <!--CSS link  -->
      <link rel="stylesheet" href="./src/style.css">
      <title>Team Profile Generator</title>
  </head>
  <body>
  <div class="container-jumbotron">
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
   </div>
  </div>
  </div>
  <div class="card-container">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
              <!--Manager info-->
                <h3 class="card-title">${name}</h3>
                <h3 class="card-title">${role}</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Office number: ${officeNumber}</li>
              </ul>
          </div>   
        </div>        
  </body>
  </html>`;

// Bonus using writeFileSync as a promise
function init() {
    console.log('questionsManager')
    questionsManager()

// Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
  };
  
  init();



  // new


  var cardDeckEl = document.getElementById('card-deck');
// displaying the values in the 5 cards
let otherCards = `<div class="card border-primary mb-3" style="max-width: 18rem;">
<div class="card-header">${cityName.value}</div><img src="${iconUrl}" width= "50px" alt="icon">
<div class="card-body text-primary">
  <p class="card-text">Temperature: ${forecast.temp.day}ºC</p>
  <p class="card-text">Humidity: ${forecast.humidity} %</p>
  <p class="card-text">UV Index: ${forecast.uvi}</p>
</div>
</div>`

console.log(cardDeckEl);
cardDeckEl.innerHTML += otherCards;

}
