// // VARIABLES
// //declare an array of special characters
// var arrSpecialCharacters = [
//     "@",
//     "%",
//     "+",
//     "\\",
//     "/",
//     "'",
//     "!",
//     "#",
//     "$",
//     "^",
//     "?",
//     ":",
//     ",",
//     ")",
//     "(",
//     "}",
//     "{",
//     "]",
//     "[",
//     "~",
//     "-",
//     "_",
//     ".",
//   ];
//   //declare an array of numberic characters
//   var arrNumericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   //declare an array of lower case characters
//   var arrLowerCasedCharacters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   //declare an array of upper cased characters
//   var arrUpperCasedCharacters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   //FUNCTIONS
//   //declare Function to prompt user for password options

//   function generatePassord(){
//       var input=prompt('How many characters?');
//       return input;
//   }
//     generatePassord();

//   // Write password to the #password input
//   function getPassword(#password) {
//     //declare variable to store length of password from user input
//     var getLengthOfPass;

//     //write conditional statement to check if password length is a number. end if evaluates to false
//     if (isNaN(getLengthOfPass) === true){
//         console.log(isNaN(getLengthOfPass))
//     }

//     // write a conditional statement to check if password length is at least 8 characters long.  end if evaluates to false
//     // write conditional statement to check if password length is less than 128 characters long. end if evaluates to false
//     //declare variable to store boolean regarding special characters
//     //declare variable to store boolean regarding numeric characters
//     //declare variable to store boolean regarding lowercase characters
//     //declare variable to store boolean regarding uppercase characters
//     //write a conditional statement to check if user does not include any types of characters. password generator ends if all four variables evaluate to false. make sure to alert user they must select at least one character type
//     //declare object to store user input and return object
//   }
//   //declare a function for getting a random element from an array
//   function getRandom(arr) {
//     //hints:  need Math.floor and Math.random, array length
//   }
//   //declare a function to generate password with user input
//   function generatePassword() {
//     //call function getPassword() and store in variable
//     //declare variable of empty array for result
//     //declare variable of empty array that stores types of characters to include in password
//     //declare variable of empty array that will eventually contain one of each type of chose character to ensure each will be used
//     //write a conditional statement that adds array of special characters into array of possible characters based on user input. push new random special character to guranteed characters
//     //write a conditional statement that adds array of numeric characters into array of possible characters based on user input. push new random numeric character to guranteed characters
//     //write a conditional statement that adds array of lowercase characters into array of possible characters based on user input. push new random lower-case character to guranteed characters
//     //write a conditional statement that adds array of uppercase characters into array of possible characters based on user input. push new random upper-case character to guranteed characters
//     //write a for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
//     // Mix in at least one of each guaranteed character in the result
//     // Transform the result into a string and pass into writePassword(hint: join method )
//   }
//   //target element #generate and store in variable
//   //declare function to write password
//   function writePassword() {
//     //call generatePassword() and store result in a variable
//     //select element with an id of #password an store in a variable
//     //grab the value of variable you just created and set it equal to the variable you stored the evaluation of generatePassord() call
//   }
//   // Add event listener to generate button
//   generateBtn.addEventListener("click", writePassword);
