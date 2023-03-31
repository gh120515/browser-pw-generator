// Assignment code here

// TODO:
// concatonation
// validation - to see if all the requests user checked is included

// Get references to the #generate & #password element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// variables

let includeLowerCase;
let includeUpperCase;
let includeNumbers;
let includeSymbols;

let generatedPassword = "";


// character types (converted into arrays using 'split' function)

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "0123456789";
const specialChar = "~!@#$%^&*-_+=(){}[]¥;:'<>,./?";

const lowerCase = lowerCaseChar.split('');
const upperCase = upperCaseChar.split('');
const numbers = numberChar.split('');
const special = specialChar.split('');


// functions for randomising characters based on the chosen password length in the previous prompt
function getRandomLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumber() {
  return numbers[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// password generation

function generatePassword() {
  // Ask user for their choice
  var userLength = window.prompt("Select your password length (by entering a number between 8-128 characters)");

  // // If user pressed Cancel or entered non-numerical characters, end function
  if (userLength < 8 || userLength > 128 || isNaN || !userLength) {
    alert("Please enter numerical character(s) only & ensure it is within 8-168 characters.");
    return;
  };
  
}
    // WIP

  //   for (i = 0, i <= userLength; i++;) {

  //   let userLowerCase = window.confirm("Would you like to include lower case characters?");
  //   if (userLowerCase === true) {
  //     generatedPassword += getRandomLower();
  //   }
  
  //     let userUpperCase = window.confirm("Would you like to include upper case characters?");
  //   if (userUpperCase === true) {
  //     generatedPassword += getRandomUpper();
  //   }

  // let userNumbers = window.confirm("Would you like to include numerical characters?");
  // if (userNumbers === true) {
  //   generatedPassword += getRandomNumber();
  // }

  // let userSpecial = window.confirm("Would you like to include special characters? (e.g. !@#$%)");
  // if (userSpecial === true) {
  //  generatedPassword += getRandomSymbol();
  // }

  // }
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);