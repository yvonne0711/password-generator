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
  // prompt the user to input how many characters they want their password to be
  var passwordLength = prompt("How long will you want your password to be? Choose from 8-128. ");

  // if the password is not from 8 to 128 characters, alert the user
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter a password between 8-128 characters.");
    return null;
  }
  else {
    // var includeSpecials = confirm("Want special characters?");
    // var includeNumbers = confirm("Want numbers in it?");
    // var includeLowercase = confirm("Want small letters?");
    // var includeUppercase = confirm("What about big letters?");
    return passwordLength;
  }


}



// Function for getting a random element from an array
function getRandom(arr) {
  // get a random number 
  var randomSpecial = Math.floor(Math.random() * arr.length);
  return arr[randomSpecial];
  // console.log(specialCharacters[randomSpecial]);
  // console.log(numericCharacters[randomSpecial]);
  // console.log(lowerCasedCharacters[randomSpecial]);
  // console.log(upperCasedCharacters[randomSpecial]);
}


// Function to generate password with user input
function generatePassword() {

  var length = getPasswordOptions();
  if (length==false) {
      return "Not possible to generate a password!";
  }

  // all characters merged together in one string
  var allCharacters = specialCharacters.concat(numericCharacters).concat(lowerCasedCharacters).concat(upperCasedCharacters);

  // create an empty password variable to later append characters in
  var password = "";

  // for each character, randomly assign the characters and append them to the variable password 
  for (var i = 0; i < length; i++) {
    password += getRandom(allCharacters);
  }

  return password;
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

