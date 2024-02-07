import './styles/style.sass';

const form = document.querySelector('form');
const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const submit = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll('input');

// regexes
const passwordRegex = /(?=(?:\w|[!@#$%^&*()_+]){8,20}).*/i;
const emailRegex = /^\w+@\w+\.\w{2,3}$/;

document.onload = clearForm();

function clearForm() {
    inputs.forEach((input) => {
        input.value = '';
    })
}

function events() {
    let trueEvents = 0;
    firstNameInput.addEventListener('input', () => {
        let firstNameVal = firstNameInput.value;
        if (firstNameVal === '') {
            firstNameInput.setAttribute('error', '');
            firstNameInput.nextElementSibling.setAttribute('error', '');
            firstNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            firstNameInput.removeAttribute('error');
            firstNameInput.nextElementSibling.removeAttribute('error')
            firstNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }   
    })

    firstNameInput.addEventListener('focus', () => {
        let firstNameVal = firstNameInput.value;
        if (firstNameVal === '') {
            firstNameInput.setAttribute('error', '');
            firstNameInput.nextElementSibling.setAttribute('error', '');
            firstNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            firstNameInput.removeAttribute('error');
            firstNameInput.nextElementSibling.removeAttribute('error')
            firstNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }
    })
    
    lastNameInput.addEventListener('input', () => {
        let lastNameVal = lastNameInput.value;
        if (lastNameVal === '') {
            lastNameInput.setAttribute('error', '');
            lastNameInput.nextElementSibling.setAttribute('error', '');
            lastNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '')
        } else {
            lastNameInput.removeAttribute('error');
            lastNameInput.nextElementSibling.removeAttribute('error');
            lastNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }
    })

    lastNameInput.addEventListener('focus', () => {
        let lastNameVal = lastNameInput.value;
        if (lastNameVal === '') {
            lastNameInput.setAttribute('error', '');
            lastNameInput.nextElementSibling.setAttribute('error', '');
            lastNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '')
        } else {
            lastNameInput.removeAttribute('error');
            lastNameInput.nextElementSibling.removeAttribute('error');
            lastNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }
    })
    
    emailInput.addEventListener('input', () => {
        let emailVal = emailInput.value;
        if (!emailRegex.test(emailVal)) {
            emailInput.setAttribute('error', '');
            emailInput.nextElementSibling.setAttribute('error', '');
            emailInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            emailInput.removeAttribute('error');
            emailInput.nextElementSibling.removeAttribute('error');
            emailInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })

    emailInput.addEventListener('focus', () => {
        let emailVal = emailInput.value;
        if (!emailRegex.test(emailVal)) {
            emailInput.setAttribute('error', '');
            emailInput.nextElementSibling.setAttribute('error', '');
            emailInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            emailInput.removeAttribute('error');
            emailInput.nextElementSibling.removeAttribute('error');
            emailInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })
    
    passwordInput.addEventListener('input', () => {
        let passVal = passwordInput.value;
        if (!passwordRegex.test(passVal)) {
            passwordInput.setAttribute('error', '');
            passwordInput.nextElementSibling.setAttribute('error', '');
            passwordInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            passwordInput.removeAttribute('error');
            passwordInput.nextElementSibling.removeAttribute('error');
            passwordInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })

    passwordInput.addEventListener('focus', () => {
        let passVal = passwordInput.value;
        if (!passwordRegex.test(passVal)) {
            passwordInput.setAttribute('error', '');
            passwordInput.nextElementSibling.setAttribute('error', '');
            passwordInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            passwordInput.removeAttribute('error');
            passwordInput.nextElementSibling.removeAttribute('error');
            passwordInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })
}

events();

form.addEventListener('submit', (e) => {
    e.preventDefault();
})



