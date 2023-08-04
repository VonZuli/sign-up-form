"use strict";

const submitBtn = document.querySelector("#footer-section > button");
const checkPass1 = document.querySelector("#password");
const checkPass2 = document.querySelector("#confirm_password");
const email = document.querySelector("#email");
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

submitBtn.addEventListener("click", validatePassword);
submitBtn.addEventListener("click", validateEmail);

function validatePassword() {
  if (checkPass1.value != checkPass2.value) {
    //add a class of "error" to input variables if passwords do not match each other
    checkPass1.classList.add("error");
    checkPass2.classList.add("error");
    console.log("no match");
  } else if (checkPass1.value === "" || checkPass2.value === "") {
    //add a class of "error" to input variables if password fields are blank
    checkPass1.classList.add("error");
    checkPass2.classList.add("error");
    console.log("blank");
  } else if (checkPass1.value.length < 8 || checkPass1.value.length > 15) {
    //add a class of "error" to input variables if password fields do not meet length requirements
    checkPass1.classList.add("error");
    checkPass2.classList.add("error");
    console.log("length");
  } else if (!checkPass1.value.match(passwordPattern)) {
    //add a class of "error" to input variables if password fields do not match regex pattern
    checkPass1.classList.add("error");
    checkPass2.classList.add("error");
    console.log("pattern");
  } else {
    //add a class of "match" to input variables
    checkPass1.classList.remove("error");
    checkPass2.classList.remove("error");
    checkPass1.classList.add("valid");
    checkPass2.classList.add("valid");
    console.log("valid");
  }
}

// function validateEmail() {
//   if (email.value.match(emailPattern)) {
//     email.classList.add("valid")
//   } else{
//     email.classList.add("error")
//     console.log("email pattern");
//   }
// }
