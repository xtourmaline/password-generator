// Assignment Code
let generateBtn = document.querySelector("#generate");

// create the function here
// prompt to get the number of characters in password
// need 4 ifs with 4 confirmExpressionconditionals
// processing...
// return password
//   return "turtle"; // if turtle is a password

function getInput(criteria) {
  while (true) {
    let input = prompt(`Do you want your password to have ${criteria}? y/n`);

    if (input === "y") {
      return true;
    } else if (input === "n") {
      return false;
    } else {
      alert("Invalid response, please try again!");
    }
  }
}

function getLength() {
  while (true) {
    let input = Number(prompt("What length to you want your password? (between 8 and 128)"));
    if (input >= 8 && input <= 128) {
      return input;
    } else {
      alert("Response invalid or out of range, please try again!");
    }
  }
}

let lowercase = getInput("lowercase letters");
let uppercase = getInput("uppercase letters");
let number = getInput("numbers");
let special = getInput("special characters");
let length = getLength();

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



`
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
`