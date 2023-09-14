const passwordEl = document.querySelector("#password");
const upperChecker = document.querySelector("#uppercase");
const generateBtn = document.querySelector("#generate");
const lowerChecker = document.querySelector("#lowercase");
const numChecker = document.querySelector("#num");
const lengthVal = document.querySelector("#length");
const specialcChecker = document.querySelector("sCharacters");

const upper = upperChecker.checked;

const num = numChecker.checked;
const lower = lowerChecker.checked;
const sym = specialcChecker.checked;
const length = lengthVal.value;
let settingsNum = upper + lower + sym + numChecker;

// adding lowercase letters to an array
var lowC = charactersArray(26,97);
var upC = charactersArray(26,65);
var symA = charactersArray(11,33);
var numA = charactersArray(10,48);

// console.log(lowC + upC + symA);
// Assignment Code

function charactersArray(param1,param2) {
  let arr = [];
  for( let i = 0; i < param1; i++){
  arr.push(String.fromCharCode(param2 + i));
  }
return arr;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generateSettings);

