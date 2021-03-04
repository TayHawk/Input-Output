let name = require('readline-sync');

let greetFirstName = name.question('What is your first name? ');
let greetLastName = name.question('What is your last name? ');

console.log(`Hello, ${greetFirstName} ${greetLastName}.`);