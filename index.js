"use strict";

document.querySelector("button").addEventListener("click", function (event) {
  const userName = document.querySelector("#userName").value;
  const userEmail = document.querySelector("#email-id").value;
  userName === "" || userEmail == ""
    ? alert(`User information cannot be empty`)
    : console.log(`name:${userName} and email: ${userEmail}`);

  const userPassword = document.querySelector("#password").value;
  const userPasswordCheck = document.querySelector("#passwordCheck").value;
  if (userPassword !== userPasswordCheck) {
    alert(`password didn't match`);
    event.preventDefault();
  }
});
