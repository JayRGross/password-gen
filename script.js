// Elements
const password = document.querySelector('#password');
const button = document.querySelector('button');

// Password Data
let characters = '012345678910abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:<>?|';
let passwordLength = 16;
let passwordValue = '';

// Create Password
const createPassword = () => {
  passwordValue = '';

  for (let i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number +1);
  }

  password.value = passwordValue;
}

//events
button.addEventListener('click', createPassword);