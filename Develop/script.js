// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables

let includeLowerCase
let includeUpperCase
let includeNumbers
let includeSymbols

let generatedPassword = ""
let passwordLength = ""

// character types & random generation function

// let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
// let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numberChar = "0123456789";
// let specialChar = "~!@#$%^&*-_+=(){}[]¥;:'<>,./?";

// functions for randomising characters based on the chosen password length in the previous prompt
function getRandomLower() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpper() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumber() {
  const number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  const symbols = "~!@#$%^&*-_+=(){}[]¥;:'<>,./?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// password generation

writePassword = function() {
  // Ask user for their choice
  let userLength = window.prompt("Select your password length (by entering a number between 8-128 characters)");

  // If user pressed Cancel, immediately end function
  if (!userLength) {
    return;
  }
  let passwordLength = userLength;

  generatePassword();

  generatePassword = function() {

    for (i = 0, i <= passwordLength; i++;) {

    let userLowerCase = window.confirm("Would you like to include lower case characters?");
    if (userLowerCase === true) {
      generatedPassword += getRandomLower();
    }
  
      let userUpperCase = window.confirm("Would you like to include upper case characters?");
    if (userUpperCase === true) {
      generatedPassword += getRandomUpper();
    }

  let userNumbers = window.confirm("Would you like to include numerical characters?");
  if (userNumbers === true) {
    generatedPassword += getRandomNumber();
  }

  let userSpecial = window.confirm("Would you like to include special characters? (e.g. !@#$%)");
  if (userSpecial === true) {
   generatedPassword += getRandomSymbol();
  }

  let password = generatedPassword.slice(0, length);

  return password; 
  
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);