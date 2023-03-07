let password = document.getElementById('password');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let length = document.getElementById('length');

function addValid(className) {
    className.classList.remove('invalid');
    className.classList.add('valid');
}

function removeValid(className) {
    className.classList.remove('valid');
    className.classList.add('invalid');
}

password.onfocus = function () {
    document.getElementById('message').style.display = 'block';
};

// hide the messages when clicking out of password
password.onblur = function () {
    document.getElementById('message').style.display = 'none';
};

password.onkeyup = function () {
    // lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        addValid(letter);
    } else {
        removeValid(letter);
    }

    // capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        addValid(capital);
    } else {
        removeValid(capital);
    }

    // numbers
    let numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        addValid(number);
    } else {
        removeValid(number);
    }

    // length
    if (password.value.length >= 8) {
        addValid(length);
    } else {
        removeValid(length);
    }
};
