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
  return indexR;
}

function passwordGenerator(fsObj, length) {
  let pass = '';
  for (let i = 0; i < length; i += acumm) {
    Object.keys(fsObj).forEach(key => {
      const characterArray =
        key === 'upper' ? upC :
          key === 'lower' ? lowC :
            key === 'num' ? numA :
              key === 'sym' ? symA : [];
        // console.log(characterArray);
      const randomCharacter = randomSelector(characterArray);
      // console.log(randomCharacter)
      pass += randomCharacter;
    });
  }
  return pass;
}

const generatedPassword = passwordGenerator(fsObj, 2);
const slicedPassword = generatedPassword.slice(0, 2);

console.log(slicedPassword);
console.log(slicedPassword.length);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", generateSettings);

