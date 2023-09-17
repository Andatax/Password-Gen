function generatePassword() {
  // adding lowercase letters to an array
  let lowerCaseArr = charactersArray(26, 97);
  // adding uppercase letters to an array
  let upperCaseArr = charactersArray(26, 65);
  // adding special characters to an array
  let specialCharsArr = charactersArray(11, 33);
  // adding numbers to an array;
  let numbersArr = charactersArray(10, 48);
  let password = '';
  let emptyArray = [];
  const passwordLength = Number(window.prompt("Type your desired password length please.\n(Minimum 8 characters long and no more than 128 characters)", ""));
  const lowerCharPrompt = window.confirm("Would you like your password to contain lowercase characters?")
    ? emptyArray = emptyArray.concat(lowerCaseArr)
    : emptyArray;
    
  const upperCharPrompt = window.confirm("Would you like your password to contain uppercase characters?")
    ? emptyArray = emptyArray.concat(upperCaseArr)
    : emptyArray;

  const specialCharsPrompt = window.confirm("Would you like your password to contain special characters?")
    ? emptyArray = emptyArray.concat(specialCharsArr)
    : emptyArray;

  const numbersPrompt = window.confirm("Would you like your password to contain numbers?")
    ? emptyArray = emptyArray.concat(numbersArr)
    : emptyArray;
  console.log(emptyArray);
  for (i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * emptyArray.length);
    password += emptyArray[randomIndex];
  }
  return password
}

function charactersArray(alphabetLength, ASCIIcodeOffset) {
  let arr = [];
  for (let i = 0; i < alphabetLength; i++) {
    arr.push(String.fromCharCode(ASCIIcodeOffset + i));
  }
  return arr;
}


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

