let password = document.getElementById("password");
let toggleBtn = document.getElementById("toggle-btn");

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialCharacter = document.getElementById("special");
let minLength = document.getElementById("length");

function checkPassword(data) {
  //javascript regular expression pattern
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*()])");
  const length = new RegExp("(?=.{8,})");

  //lowercase validation check
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }

  //uppercase validation
  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }

  //number validation
  if (number.test(data)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }

  //special validation
  if (special.test(data)) {
    specialCharacter.classList.add("valid");
  } else {
    specialCharacter.classList.remove("valid");
  }

  //lenght validation
  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

//show hide password
toggleBtn.onclick = function () {
  if (password.type === "password") {
    password.setAttribute("type", "test");
    toggleBtn.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    toggleBtn.classList.remove``("hide");
  }
};
