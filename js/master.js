let signUp = document.querySelector(".sign-up-butn");
let signIn = document.querySelector(".sign-in-butn");
let info = document.querySelector(".info");
let infoSignIn = document.querySelector(".info .info-signIn");
let infoSignUp = document.querySelector(".info .info-signup");
console.log(signUp);
signUp.onclick = function () {
  info.classList.toggle("move")
  infoSignIn.style.display = "block";
  infoSignUp.style.display = "none";
};
signIn.onclick = function () {
  info.classList.toggle("move");

  infoSignIn.style.display = "none";
  infoSignUp.style.display = "block";
};
