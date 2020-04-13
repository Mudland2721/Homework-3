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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
