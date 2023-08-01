"use strict";


const submitBtn = document.querySelector("#footer-section > button");

const checkPass1 = document.querySelector("#password");
const checkPass2 = document.querySelector("#confirm_password");


submitBtn.addEventListener("click", validatePassword);
function validatePassword() {
  // console.log('TEST');
  if (checkPass1.value !=  checkPass2.value) {
    //add a class of "match" to input variables

    checkPass1.classList.add("error");
    checkPass2.classList.add("error");

    // input.style.border = "2px solid green";
    // input.style.border = "2px solid green";
  } else {
    //add a class of "error" to input variables
    checkPass1.classList.add("match");
    checkPass2.classList.add("match");
  }
}

// input.addEventListener("focus", ()=>{
//   input.style.border = "2px solid #e5e7eb";
// })
