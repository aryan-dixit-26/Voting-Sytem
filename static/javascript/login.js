const signUpBtn = document.getElementById("btn-SignUp");
const loginBtn = document.getElementById("btn-Login");
const loginForm = document.getElementById("loginForm");
const loginbtnSignUp = document.getElementById("btn-Login-signUp");
const signUpForm = document.getElementById("signUpForm");
const signUpbtnSignUp = document.getElementById("btn-SignUp-signUp");

signUpBtn.addEventListener("click", () => {
      loginForm.style.visibility = "hidden";
      signUpForm.style.visibility = "visible";
},3000);
loginBtn.addEventListener("click", () => {
      loginForm.style.visibility = "visible";
      signUpForm.style.visibility = "hidden";
},3000);
loginbtnSignUp.addEventListener("click", () => {
      loginForm.style.visibility = "visible";
      signUpForm.style.visibility = "hidden";
},3000);
signUpbtnSignUp.addEventListener("click", () => {
      loginForm.style.visibility = "hidden";
      signUpForm.style.visibility = "visible";
},3000);

