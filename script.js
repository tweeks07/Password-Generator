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
var numbers = ["1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["!","@","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","?","[","]","^","_","'","{","|","}","~"];

//function to get password criteria from user
//prompt length of password - string
//confirm characters type - t/f
//return answers