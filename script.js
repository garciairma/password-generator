// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {
  const lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacters = [
    ",",
    ".",
    "?",
    "/",
    "(",
    ")",
    "*",
    "&",
    "^",
    "$",
    "#",
    "@",
    "!",
    "`",
    ":",
    ";",
    "[",
    "'",
    "-",
    "<",
    ">",
  ];

  // Password is currently blank! We need to make a better one
  let password = "";

  let passwordLength = parseInt(prompt("How long do you want your password to be?"));
  if (passwordLength > 128 || passwordLength < 8) {
    passwordLength = parseInt(prompt(
      "Your password must be between 8 and 128 characters, try again"
    ));
  }
  const confirmUppercase = confirm("Do you want to use upper case letters?");
  const confirmLowercase = confirm("Do you want to use lower case letters?");
  const confirmNumber = confirm("Do you want to use numbers?");
  const confirmSpecialChars = confirm("Do you want to use special characters?");

  let characterSet = [];
  if (confirmLowercase === true) {
    characterSet = characterSet.concat(lowerCaseLetters);
  }

  if (confirmUppercase === true) {
    characterSet = characterSet.concat(upperCaseLetters);
  }

  if (confirmNumber === true) {
    characterSet = characterSet.concat(numbers);
  }

  if (confirmSpecialChars === true) {
    characterSet = characterSet.concat(specialCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The user first clicks on a generate password button
// When this button is clicked, show a prompt asking them fort heir password length
// ift heir passowrd is too long or too short, show and error message andt hellth emt o try again
// once they pass that validation, askt hem ift hey wantu pper case characters
// askth em ift hey wantl owerc ase
// askth em ift hey want numbers
// askt hem ift hey want specialc haracters

// ift heyw ant lowercase, addth att o my characters et
//i ft heyw ant uppercase ,a dd that tom y carhacters et
//
