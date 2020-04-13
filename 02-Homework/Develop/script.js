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

function characterGenerator() {
  Math.random(
    arrNumericCharacters,
    arrSpecialCharacters,
    arrUpperCasedCharacters,
    arrLowerCasedCharacters
  );
}

// generatePassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add submit button event listener
// submitButton.addEventListener("click", generatePassword );
