// Assignment Code
let generateBtn = document.querySelector("#generate");

// gets a random character from a string
function getRandomFromString(string) {
  return string.charAt(Math.floor(Math.random() * string.length));
}

// generates password based on given criteria
function generatePassword(lowercase, uppercase, number, special, length) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  let allChars = "";
  let password = "";

  // force each criteria at least once, not secure but efficient
  if (lowercase) {
    password += getRandomFromString(lowercaseChars);
    allChars += lowercaseChars;
  }
  if (uppercase) {
    password += getRandomFromString(uppercaseChars);
    allChars += uppercaseChars;
  }
  if (number) {
    password += getRandomFromString(numberChars);
    allChars += numberChars;
  }
  if (special) {
    password += getRandomFromString(specialChars);
    allChars += specialChars;
  }

  // process the rest of the characters and fill up randomly
  for (let i = password.length; i < length; i++) {
    password += getRandomFromString(allChars);
  }

  return password;
}

// loops until valid input is given for criteria
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

// asks user length of password
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

// Write password to the #password input
function writePassword() {
  let length = getLength();

  let lowercase, uppercase, number, special;

  while (true) {
    lowercase = getInput("lowercase letters");
    uppercase = getInput("uppercase letters");
    number = getInput("numeric characters");
    special = getInput("special characters");

    if (lowercase == false && uppercase == false && number == false && special == false) {
      alert("Must select at least ONE criteria (you selected none)");
    } else {
      break;
    }
  }
  
  let password = generatePassword(lowercase, uppercase, number, special, length);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);