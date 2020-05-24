var passLength = 0;
var newPassword = [];
var isCharTypeNum = "false";
var isCharTypeUpper = "false";
var isCharTypeLower = "false";
var isCharTypeSpecial = "false";
var generateBtn = document.querySelector("#generate");
var displayPasswordEl = document.querySelector("#password");


var typeLowerCaseLetters = [
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
var typeUpperCaseLetters = [
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
var typeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var typeSpecialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  ":",
  '"',
  "<",
  ">",
  "?",
  '"',
];

//pass gen function 
generateBtn.addEventListener("click", function () {
  event.preventDefault();
  getUserInput();
  generateUserArray();
  generatePassword();
  userArray = [];
});

//userInput
function getUserInput() {
  passLength = prompt("Select legth of 10-128 characters:");
  isCharTypeNum = confirm("Include numbers?");
  isCharTypeUpper = confirm("Include upper case?");
  isCharTypeLower = confirm("Include lower case?");
  isCharTypeSpecial = confirm("Include special characters");
}

var userArray = [];
//function to produce users array 
function generateUserArray() {
  if (isCharTypeUpper === true)
    userArray = userArray.concat(typeUpperCaseLetters);
  if (isCharTypeLower === true)
    userArray = userArray.concat(typeLowerCaseLetters);
  if (isCharTypeNum === true) userArray = userArray.concat(typeNumbers);
  if (isCharTypeSpecial === true)
    userArray = userArray.concat(typeSpecialCharacters);
}
//function to produce users array end

//genPass function
function generatePassword() {
  if (userArray.length < typeNumbers.length || passLength < 10) {
    alert("You did not meet the minimum standard ");
  } else {
    for (i = 0; i < passLength; i++) {
      newPassword +=
      userArray[Math.floor(Math.random() * (userArray.length - 1))];
    }
    displayPasswordEl.textContent = newPassword;
  }
  newPassword = [];
}

generateBtn.addEventListener("click", writePassword);