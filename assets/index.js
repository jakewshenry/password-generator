// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt('Enter a number between 8 and 128 for your password length:'));

  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid password length, please enter a valid length of between 8 and 128 characters.');
    return;
  }

  var includeCapitalLetters = confirm('Do you want to include capital letters?');
  var includeNumbers = confirm('Do you want to include numbers?');
  var includeSpecialCharacters = confirm('Do you want to include special characters?');

  if (!includeCapitalLetters && !includeNumbers && !includeSpecialCharacters) {
    alert('At least one character type should be selected.');
    return;
  }

  return {
    length,
    includeCapitalLetters,
    includeNumbers,
    includeSpecialCharacters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return;
  }

  var result = [];
  var possibleChars = [...lowerCasedCharacters];
  var generatedPassword = [];

  generatedPassword.push(getRandom(lowerCasedCharacters));

  // Include special characters in the password if chosen by the user
  if (options.includeSpecialCharacters) {
    possibleChars.push(...specialCharacters);
    generatedPassword.push(getRandom(specialCharacters));
  }

  // Include numbers in the password if chosen by the user
  if (options.includeNumbers) {
    possibleChars.push(...numericCharacters);
    generatedPassword.push(getRandom(numericCharacters));
  }

  // Include uppercase letters in the password if chosen by the user
  if (options.includeCapitalLetters) {
    possibleChars.push(...upperCasedCharacters);
    generatedPassword.push(getRandom(upperCasedCharacters));
  }

  // Generate the remaining characters in the password
  for (var i = generatedPassword.length; i < options.length; i++) {
    result.push(getRandom(possibleChars));
  }

  // Replace the initial characters with the generated ones
  for (var i = 0; i < generatedPassword.length; i++) {
    result[i] = generatedPassword[i];
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  // Display the generated password or a message if none is generated
  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = 'Could not generate a password, please try again.';
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
