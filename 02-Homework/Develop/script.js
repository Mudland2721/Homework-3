// VARIABLES
var getPasswordOptions;
var input1;
var input2;
var input3;
var input4;
var userHowManyCharacters;
var userAnyNumbers;
var userAnyUppercase;
var userAnySymbols;
var userNumbers;
var userUpper;
var userSymbol;
var userLower;

//declare an array of special characters
var arrSpecialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
//declare an array of numberic characters
var arrNumericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//declare an array of lower case characters
var arrLowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//declare an array of upper cased characters
var arrUpperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//FUNCTIONS
//declare Function to prompt user for password options
function generatePassword(event) {
  event.preventDefault();
  input1 = prompt("How many characters?");
  input2 = confirm("Any numbers?");
  input3 = confirm("Any uppercase?");
  input4 = confirm("Any symbols?");
  input5 = confirm("Any lowercase?");

  return getPasswordOptions;
}

//variables to store user input

//function to store ALL user input

function userInput(event) {
  event.preventDefault();
  userHowManyCharacters = input1.value;
  userAnyNumbers = input2.value;
  userAnyUppercase = input3.value;
  userAnySymbols = input4.value;
}
userInput();

userHowManyCharacters();
if (typeof userHowManyCharacters !== "number") {
  return true;
} else if (typeof userHowManyCharacters === false) {
  return false;
} else if (userHowManyCharacters.value.length < 8) {
  prompt("Must be 8 characters");
  return false;
} else if (userHowManyCharacters.value.length >= 128) {
  prompt("Must be less than 128 characters");
  return false;
  //It will say false if 128
} else if (userHowManyCharacters.value.length === 0) {
  prompt("Must specify how many characters");
  return;
}

// To store password input
var userNumbers = input2;
var userUpper = input3;
var userSymbol = input4;
var userLower = input5;

// made a function to make a password with all the chars

function createPassword(event) {
  event.preventDefault();
  Math.random(
    arrLowerCasedCharacters,
    arrNumericCharacters,
    arrSpecialCharacters,
    arrUpperCasedCharacters
  );
}


function getPassword() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  // Variable to store boolean regarding the inclusion of special characters
  // Variable to store boolean regarding the inclusion of numeric characters
  // Variable to store boolean regarding the inclusion of lowercase characters
  // Variable to store boolean regarding the inclusion of uppercase characters
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false. Finish up this if statement with the remaining variables above
  if (hasSpecialCharacters === false && hasNumericCharacters === false) {
    alert("You must select at least one special character type");
    return;
  }
  //create object to store user input.  We are using an object to store user input. finish the object based on the variables above
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
  };
  return passwordOptions;
}

//array to store types of char
var arrOfStoredCharacters [arrLowerCasedCharacters, arrNumericCharacters, arrSpecialCharacters, arrUpperCasedCharacters]; 
//array to use one of each
var arrOneOfEach [""];


//this is where i need help 




// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
