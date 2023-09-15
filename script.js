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

// takes initial values checked only but it doesn't update the values the box is unchecked
const settings = { upper, num, lower, sym };
console.log(settings)
const settingsC = Object.entries(settings).filter(([key, value]) => value === true);
console.log(settingsC)
const FilteredSettings = {};
const fsObj = settingsC.reduce((object, [key]) => { object[key] = true; return object; }, FilteredSettings);
const activeSettings = (upper + num + lower + sym);

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

// ---------- ---------------------------------------------------------------Option 1 ----------

// function passwordGenerator(obj, userLength, lowerCaseArray, upperCaseArray, numbersArray, symbolsArray) {
//   let pass = '';
//   let set = Object.keys(obj);
//   console.log(set)
//   for (let i = 0; i < userLength;  i+=4) {
//     pass += randomSelector(lowerCaseArray)
//     pass += randomSelector(upperCaseArray)
//     pass += randomSelector(numbersArray)
//     pass += randomSelector(symbolsArray)
//   }
//   return pass
// }
// console.log(passwordGenerator(fsObj, 16, lowC, upC, symA, numA))

// ------------------------------------------------------------------------ Option 2 ---------------------

function passwordGenerator(obj, userLength, lowerCaseArray, upperCaseArray, numbersArray, symbolsArray) {
  let pass = '';
  let set = Object.keys(obj);
  console.log(set)
  for (let i = 0; i <= lengthVal.value; i += set.length) {
    if (lowerChecker.checked) {
      pass += randomSelector(lowerCaseArray)
    }
    if (upperChecker.checked) {
      pass += randomSelector(upperCaseArray)
    }
    if (numChecker.checked) {
      pass += randomSelector(numbersArray)
    }
    if (scChecker.checked) {
      pass += randomSelector(symbolsArray)
    }
  }
  console.log(pass)
  console.log(pass.length)
  return pass
}
// console.log(passwordGenerator(fsObj, 16, lowC, upC, numA, symA))



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  passwordGenerator(fsObj, 16, lowC, upC, numA, symA)
});

