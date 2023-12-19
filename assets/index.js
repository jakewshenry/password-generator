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
    var possibleCharacters = [...lowerCasedCharacters];
    var outputGeneratedPassword = [];
  
    outputGeneratedPassword.push(getRandom(lowerCasedCharacters));
  
    if (options.passwordSpecialCharacters) {
      possibleCharacters.push(...specialCharacters);
      outputGeneratedPassword.push(getRandom(specialCharacters));
    }
  
    if (options.passwordNumbers) {
      possibleCharacters.push(...numericCharacters);
      outputGeneratedPassword.push(getRandom(numericCharacters));
    }
  
    if (options.passwordCapitalLetters) {
      possibleCharacters.push(...upperCasedCharacters);
      outputGeneratedPassword.push(getRandom(upperCasedCharacters));
    }
  
    for (var i = outputGeneratedPassword.length; i < options.length; i++) {
      result.push(getRandom(possibleCharacters));
    }
  
    for (var i = 0; i < outputGeneratedPassword.length; i++) {
      result[i] = outputGeneratedPassword[i];
    }
  
    return result.join('');
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);