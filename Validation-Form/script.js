// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm-password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateInputs();
// });

// // TODO: setError function takes 2 args - HTMLElement, message
// const setError = (element, message) => {
//   // TODO: inputControl by parentElement to add error class / remove success class
//   const inputControl = element.parentElement;
//   console.log("running setError");
//   // TODO: errorDisPlay + assign message to innerText
//   const errorDisplay = inputControl.querySelector(".error");

//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");

//   errorDisplay.innerText = message;
// };

// const isValidateEmail = (email) => {
//   const regExp =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regExp.test(String(email).toLocaleLowerCase());
// };

// const setSuccess = (element) => {
//   // TODO: inputControl to remove error class / add success class
//   const inputControl = element.parentNode;
//   const successDisplay = inputControl.querySelector("div.error");
//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");

//   successDisplay.textContent = "";
// };

// const validateInputs = () => {
//   // TODO: trim all input value to avoid redundant space
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const confirmPasswordValue = confirmPassword.value.trim();
//   // TODO: actual validation logic comes here

//   if (usernameValue === "") {
//     setError(username, "Username is required!");
//   } else {
//     setSuccess(username);
//   }
//   if (emailValue === "") {
//     setError(email, "Email is required!");
//   } else if (isValidateEmail(emailValue)) {
//     setSuccess(email);
//   } else {
//     setError(email, "Must not be empty or not matching email type!");
//   }

//   if (passwordValue === "") {
//     setError(password, "Password is required!");
//   } else if (passwordValue.length < 8) {
//     setError(password, "Password must long than 8 characters!");
//   } else {
//     setSuccess(password);
//   }

//   if (confirmPasswordValue === "") {
//     setError(confirmPassword, "Please confirm your password!");
//   } else if (confirmPasswordValue !== passwordValue) {
//     setError(confirmPassword, "Password does not match, please try again!");
//   } else setSuccess(confirmPassword);
// };

/* 
Takeaway - Sumup

1. always get the ref of all DOM element first
2. add eventListener to form that envoke e.preventDefault() and validateInputs()
3. validateInputs need setError and setSuccess helper function

3.1 setError takes 2 arguments element, message
3.2 setSucess take 1 arguments element

4. validation logic in validationInputs()

*/

/* 
2nd try
1. get all the reference from dom element
2. addEventListener to the form with e.preventDefualt() and validateInputs()

*/

const $form = document.getElementById("form");
const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $confirmPassword = document.getElementById("confirm-password");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// element specify which field to show error, message specify field error
const setError = (element, message) => {
  // TODO - get the parent element for the specific input field
  // add remove class - error => add error class, remove success class
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message"); // *** 沒想到的部分

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  errorDisplay.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element.parentNode;
  const display = inputControl.querySelector(".error-message");
  const clearDisplay = (element) => {
    element.innerText = "";
  };
  inputControl.classList.remove("error");
  inputControl.classList.add("success");

  clearDisplay(display);
};

const isValidateEmail = (email) => {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLocaleLowerCase());
};

const validateInputs = () => {
  // need a setError() & setSucess() helper
  // forget to trim all the value
  const usernameValue = $username.value.trim();
  const emailValue = $email.value.trim();
  const passwordValue = $password.value.trim();
  const confirmPasswordValue = $confirmPassword.value.trim();

  if (usernameValue === "") {
    setError($username, "Username is required");
  } else setSuccess($username);

  if (emailValue === "") {
    setError($email, "Email is required");
  } else if (isValidateEmail(emailValue)) {
    setSuccess($email);
  } else {
    setError($email, "Email must include @ and mail");
  }

  if (passwordValue === "") {
    setError($password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError($password, "Password need at least 8 characters");
  } else {
    setSuccess($password);
  }

  if (confirmPasswordValue === "") {
    setError($confirmPassword, "Please check again your password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError($confirmPassword, "Password does not match, please try again");
  } else {
    setSuccess($confirmPassword);
  }
};
