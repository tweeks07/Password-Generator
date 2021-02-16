// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//to generate new password using criteria from input criteria function


//include: upper and lower case letters, numbers, special characters
//write each in an array
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacter = ["!","@","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","?","[","]","^","_","'","{","|","}","~"];

//function to get password criteria from user

//User Input
var characterCnt = prompt("How many characters will your password consist of? Between 8-128");

var confirmNumbers = confrim("Will password contain any numbers?");
var confirmUpperCase = confirm("Will password contain upper case letters?");
var confirmLowerCase = confirm("Will password contain lower case letter?");
var confirmSpecialCharacter = confirm("Will the password contain any special characters?");
