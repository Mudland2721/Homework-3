// VARIABLES

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

var getPasswordOptions;

//FUNCTIONS
//declare Function to prompt user for password options
function generatePassord() {
  var input = prompt("How many characters?");
  var input = prompt("Any numbers?");
  var input = prompt("Any uppercase?");
  var input = prompt("Any symbols?");

  return getPasswordOptions;
}

//variables to store user input
var userHowManyCharacters;
var userAnyNumbers;
var userAnyUppercase;
var userAnySymbols;

generatePassord();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
