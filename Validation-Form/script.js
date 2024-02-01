// 1. first save all the reference for DOM elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

// TODO: setError function takes 2 args - HTMLElement, message
const setError = (element, message) => {
  // TODO: inputControl by parentElement to add error class / remove success class
  // TODO: errorDisPlay + assign message to innerText
};

const isValidateEmail = (email) => {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLocaleLowerCase());
};

const setSuccess = (element) => {
  // TODO: inputControl to remove error class / add success class
};

const validateInput = () => {
  // TODO: trim all input value to avoid redundant space
  // TODO: actual validation logic comes here
};
