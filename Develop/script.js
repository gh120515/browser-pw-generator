// Assignment code here

// TODO:
// concatonation
// validation - to see if all the requests user checked is included

// Get references to the #generate & #password element
var generateBtn = document.querySelector("#generate");

// character types (converted into arrays using 'split' function)

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "0123456789";
const specialChar = "~!@#$%^&*-_+=(){}[]¥;:'<>,./?";

const lowerCase = lowerCaseChar.split('');
const upperCase = upperCaseChar.split('');
const numbers = numberChar.split('');
const special = specialChar.split('');

// password generation

function generatePassword() {
  // Ask user for their choice
  var userLength = window.prompt("Select your password length (by entering a number between 8-128 characters)");

  // If user pressed Cancel or entered non-numerical characters, end function
  if (userLength < 8 || userLength > 128 || !userLength) {
    alert("Please ensure your chosen length within 8-168 characters - click on the button again to restart.");
    return;
  };

  if (isNaN(userLength)) {
    alert("Please enter a numerical character - click on the button again to restart.");
    return;
  }

  // console log for debugging
  console.log("User's chosen password length = " + userLength);

  // Series of confirm (ok/cancel) prompts to gather user choices
  let userLowerCase = window.confirm("Would you like to include lower case characters?");
  let userUpperCase = window.confirm("Would you like to include upper case characters?");
  let userNumbers = window.confirm("Would you like to include numerical characters?");
  let userSpecial = window.confirm("Would you like to include special characters? (e.g. !@#$%)");

  // through concatonation, add selected character options from above into the empty password array.
  // option logged into console when selected (for debugging)
  let userChoice = [];

  if (userLowerCase) {
    userChoice = userChoice.concat(lowerCase);
    console.log("lowercase selected");
  }
  if (userUpperCase) {
    userChoice = userChoice.concat(upperCase);
    console.log("uppercase selected");
  }
  if (userNumbers) {
    userChoice = userChoice.concat(numbers);
    console.log("numbers selected");
  }
  if (userSpecial) {
    userChoice = userChoice.concat(special);
    console.log("special characters selected");
  }


  // use for loop to randomise a password, using the array generated above
  for (let i = 0; i < userLength; i++) {
    const userChoiceRandom = userChoice[Math.floor(Math.random() * userLength.length)];
    console.log(userChoiceRandom);
  }

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);