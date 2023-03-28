// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// character types

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "0123456789";
let special = "~!@#$%^&*-_+=(){}[]¥;:'<>,./?"

var password = ""

// password generation

writePassword = function() {
  // Ask user for their choice
  let userLength = window.prompt("Select your password length (8-128 characters)");

  // If user pressed Cancel, immediately end function
  if (!userLength) {
    return;
  }
  else {

  }


  let userLowerCase = window.prompt("Would you like to include lower case characters?");
  let userUpperCase = window.prompt("Would you like to include upper case characters?");
  let userNumbers = window.prompt("Would you like to include numerical characters?");
  let userSpecial = window.prompt("Would you like to include special characters? (e.g. !@#$%");


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);