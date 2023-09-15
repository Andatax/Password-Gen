const passwordEl = document.querySelector("#password");
const upperChecker = document.querySelector("#uppercase");
const generateBtn = document.querySelector("#generate");
const lowerChecker = document.querySelector("#lowercase");
const numChecker = document.querySelector("#num");
const lengthVal = document.querySelector("#length");
const scChecker = document.querySelector("#sCharacters");

const upper = upperChecker.checked;
const num = numChecker.checked;
const lower = lowerChecker.checked;
const sym = scChecker.checked;
const length = lengthVal.value;

const settings = { upper, num, lower, sym };
const settingsC = Object.entries(settings).filter(([key, value]) => value === true);
const FilteredSettings = {};
const fsObj = settingsC.reduce((object, [key]) => { object[key] = true; return object; }, FilteredSettings);
const acumm = (upper + num + lower + sym);

// adding lowercase letters to an array
let lowC = charactersArray(26, 97);
// adding uppercase letters to an array
let upC = charactersArray(26, 65);
// adding special characters to an array
let symA = charactersArray(11, 33);
// adding numbers to an array;
let numA = charactersArray(10, 48);
function charactersArray(alphabetLength, ASCIIcodeOffset) {
  let arr = [];
  for (let i = 0; i < alphabetLength; i++) {
    arr.push(String.fromCharCode(ASCIIcodeOffset + i));
  }
  return arr;
}
// random selector from character arrays
function randomSelector(CharacterArray) {
  const array = CharacterArray;
  const arrayR = Math.floor(Math.random() * array.length);
  const indexR = array[arrayR];
  return indexR
}
// how can i make a code to run the index of the array 'fsObj'
// I need to make a variable with and empty string to that every time for cycle iterates it adds in character of the array 'fsObj' options.
function generatePassword(param) {
  let pass = '';
  for (let i = 0; i < param; i + acumm) {
    fsObj.forEach((element) => pass += randomSelector(element))
  }
  return pass;
}
const finalPassword = generatePassword(10);
console.log(finalPassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", generateSettings);

