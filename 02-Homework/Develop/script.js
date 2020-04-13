// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrSpecialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_{|}~";
var arrNumericCharacters = "0123456789";
var arrLowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var arrUppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getPasswordOptions() {
  var lengthOfPass = prompt("How long of a password?");
  var numbersInPass = prompt("Any numbers?");
  var lowercaseInPass = prompt("Any lowercase?");
  var uppercaseInPass = prompt("Any uppercase?");
  var specialCharactersInPass = prompt("Any special characters?");

  // var sushiType = prompt("What kind of sushi do you like?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
