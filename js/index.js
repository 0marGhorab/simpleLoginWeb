var ACCOUNTS = "accounts";

var signinPage = document.getElementById("signinPage");
var signupPage = document.getElementById("signupPage");

var signupPageAnchor = document.getElementById("signupPageA");
var signinPageAnchor = document.getElementById("signinPageA");

var signinPageEmailInput = document.getElementById("signinEmailInput");
var signinPagePasswordInput = document.getElementById("signinPasswordInput");

var signinSubmitButton = document.getElementById("signinBtn");

var emptyWarrning = document.querySelector(".emp");
var incWarrning = document.querySelector(".inc");
var emptyWarrningUp = document.querySelector(".empup");
var existWarrning = document.querySelector(".exs");
var incWarrningUp = document.querySelector(".incup");

var signupPageNameInput = document.getElementById("signupNameInput");
var signupPageEmailInput = document.getElementById("signupEmailInput");
var signupPagePasswordInput = document.getElementById("signupPasswordInput");

var signupBtn = document.getElementById("signup-btn");

// switch between pages
// from sign in to sign up
function switchToSignupPage() {
  signinPage.classList.replace("d-flex", "d-none");
  signupPage.classList.replace("d-none", "d-flex");
}
// from sign up to sign in
function switchToSigninPage() {
  signupPage.classList.replace("d-flex", "d-none");
  signinPage.classList.replace("d-none", "d-flex");
}
//eventlistener
signupPageAnchor.addEventListener("click", switchToSignupPage);
signinPageAnchor.addEventListener("click", switchToSigninPage);
signupBtn.addEventListener("click", validateSignup);
signinSubmitButton.addEventListener("click", validateSignin);

//end switch between pages
//validate sign in page
function validateSignin() {
  var email = signinPageEmailInput.value;
  var password = signinPagePasswordInput.value;

  var regex = {
    signinEmailInput: /^[a-zA-z0-9]{3,}@[a-zA-Z]{3,8}./,
    signinPasswordInput: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  };

  if (email == "" || password == "") {
    emptyWarrning.classList.replace("d-none", "d-block");
    incWarrning.classList.replace("d-block", "d-none");
    return;
  } else {
    var isvalidatEmail = regex["signinEmailInput"].test(email);
    var isvalidatPassword = regex["signinPasswordInput"].test(password);
    if (isvalidatEmail && isvalidatPassword) {
      signin();
    } else {
      incWarrning.classList.replace("d-none", "d-block");
      emptyWarrning.classList.replace("d-block", "d-none");
    }
  }
}
//validate sign up page
function validateSignup() {
  var email = signupPageEmailInput.value;
  var name = signupPageNameInput.value;
  var password = signupPagePasswordInput.value;

  var regex = {
    signupEmailInput: /^[a-zA-z0-9]{3,30}@[a-zA-Z]{3,8}$/,
    signupNameInput: /^[a-zA-z]{3,12}$/,
    signupPasswordInput: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  };

  if (email == "" || password == "" || name == "") {
    emptyWarrningUp.classList.replace("d-none", "d-block");
    existWarrning.classList.replace("d-block", "d-none");
    incWarrningUp.classList.replace("d-block", "d-none");
    return;
  } else {
    var isvalidatEmail = regex["signupEmailInput"].test(email);
    var isvalidatPassword = regex["signupPasswordInput"].test(password);
    var isvalidatName = regex["signupNameInput"].test(name);

    if (isvalidatEmail && isvalidatPassword && isvalidatName) {
      signup();
    } else {
      existWarrning.classList.replace("d-block", "d-none");
      emptyWarrningUp.classList.replace("d-block", "d-none");
      incWarrningUp.classList.replace("d-none", "d-block");
    }
  }
}
// signup page function
function signup() {
  var email = signupPageEmailInput.value;
  var password = signupPagePasswordInput.value;
  var name = signupPageNameInput.value;

  var accounts = JSON.parse(localStorage.getItem(ACCOUNTS)) || [];
  var emailExists = false;
  for (var i of accounts) {
    if (i.email === email) {
      emailExists = true;
      break;
    }
  }
  if (emailExists) {
    signupBtn.previousElementSibling.classList.replace("d-none", "d-block");
    return;
  } else {
    accounts.push({ email, name, password });
    localStorage.setItem(ACCOUNTS, JSON.stringify(accounts));
  }
  switchToSigninPage();
}
// signin page function
function signin() {
  var email = signinPageEmailInput.value;
  var password = signinPagePasswordInput.value;

  var accounts = JSON.parse(localStorage.getItem(ACCOUNTS)) || [];

  for (var i of accounts) {
    if (i.email === email && i.password === password) {
      //ad5lo 3la el home page w azherlo Hello ${name}
    //   window.location.replace()
        const pathname = window.location.pathname.split('/')
        pathname.pop()
        window.location.replace(pathname.join('/') + '/home.html' + '?name=' + i.name)

      return;
    } else {
      incWarrning.classList.replace("d-none", "d-block");
      emptyWarrning.classList.replace("d-block", "d-none");
    }
  }
}
// switch to home page
function homepage(){
    
}