// Assignment Code
let generateBtn = document.querySelector("#generate");

// create the function here
// prompt to get the number of characters in password
// need 4 ifs with 4 confirmExpressionconditionals
// processing...
// return password
//   return "turtle"; // if turtle is a password

function generatePassword(lowercase, uppercase, number, special, length) {
  let listOfCharacters = [];

  let lowercaseIndex = -1;
  let lowercaseCount = -1;

  let uppercaseIndex = -1;
  let uppercaseCount = -1;

  let numberIndex = -1;
  let numberCount = -1;

  let specialIndex = -1;
  let specialCount = -1;

  if (lowercase == true) {
    lowercaseCount = 0;
    lowercaseIndex = listOfCharacters.length;
    listOfCharacters.push("abcdefghijklmnopqrstuvwxyz".split(""));
  }
  if (uppercase == true) {
    uppercaseCount = 0;
    uppercaseIndex = listOfCharacters.length;
    listOfCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }
  if (number == true) {
    numberCount = 0;
    numberIndex = listOfCharacters.length;
    listOfCharacters.push("0123456789".split(""));
  }
  if (special == true) {
    specialCount = 0;
    specialIndex = listOfCharacters.length;
    listOfCharacters.push("!@#$%^&*()".split(""));
  }

  let index = Math.round(Math.random() * (listOfCharacters.length - 1));
  
  if (index == lowercaseIndex) {
    lowercaseCount++;
  } else if (index == uppercaseIndex) {
    uppercaseCount++;
  } else if (index == numberIndex) {
    numberCount++;
  } else {
    specialCount++;
  }
  
  let password = ""

  for (let i = 0; i < length; i++) { 
    let criteriaList = listOfCharacters[index];
    let character = criteriaList[Math.round(Math.random() * (criteriaList.length - 1))];
    password += character

    if (i === Math.floor(length/2)) {
      if (lowercaseCount == 0) {
        criteriaList = listOfCharacters[lowercaseIndex]
        character = criteriaList[Math.round(Math.random() * (criteriaList.length - 1))]
        password += character
        i++;
      }
      if (uppercaseCount == 0) {
        criteriaList = listOfCharacters[uppercaseIndex]
        character = criteriaList[Math.round(Math.random() * (criteriaList.length - 1))]
        password += character
        i++
      }
      if (numberCount == 0) {
        criteriaList = listOfCharacters[numberIndex]
        character = criteriaList[Math.round(Math.random() * (criteriaList.length - 1))]
        password += character
        i++
      }
      if (specialCount == 0) {
        criteriaList = listOfCharacters[specialIndex]
        character = criteriaList[Math.round(Math.random() * (criteriaList.length - 1))]
        password += character
        i++
      }
    }
  }
  

  return password;
}

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

//let lowercase = getInput("lowercase letters");
//let uppercase = getInput("uppercase letters");
//let number = getInput("numbers");
//let special = getInput("special characters");
//let length = getLength();

let lowercase = true;
let uppercase = true;
let number = true;
let special = true;
let length = 10;

// Write password to the #password input
function writePassword() {
  let password = generatePassword(lowercase, uppercase, number, special, length);
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