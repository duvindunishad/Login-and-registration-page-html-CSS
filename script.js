const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function activateWrapper() {
    wrapper.classList.add('active');
}

function deactivateWrapper() {
    wrapper.classList.remove('active');
}

function activatePopup() {
    wrapper.classList.add('active-popup');
}

function deactivatePopup() {
    wrapper.classList.remove('active-popup');
}

registerLink.addEventListener('click', activateWrapper);
loginLink.addEventListener('click', deactivateWrapper);
btnPopup.addEventListener('click', activatePopup);
iconClose.addEventListener('click', deactivatePopup);
