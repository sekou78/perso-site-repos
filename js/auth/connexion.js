const inputEmailSignin = document.getElementById("InputEmail");
const inputPasswordSignin = document.getElementById("InputPassword");

const inputCheckSignin = document.getElementById("checkSignin");

const inputBtnSignin = document.getElementById("btn-signin");

inputEmailSignin.addEventListener("keyup", validateFormSignin);
inputPasswordSignin.addEventListener("keyup", validateFormSignin);
inputBtnSignin.disabled = true;
inputCheckSignin.addEventListener("click", showPassword);

//Function permettant de valider tout le formulaire connexion
function validateFormSignin() {
  const mailSigninOk = validateMailSignin(inputEmailSignin);
  const passwordSigninOk = validatePasswordSignin(inputPasswordSignin);

  if (mailSigninOk && passwordSigninOk) {
    inputBtnSignin.disabled = false;
  } else {
    inputBtnSignin.disabled = true;
  }
}

//Function permettant de valider tout le formulaire 2
function validateRequiredSignin(input) {
  if (input.value != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Validation de l'adresse mail
function validateMailSignin(input) {
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Validation du mot de passe
function validatePasswordSignin(input) {
  //Définir mon regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Affichage du mot de passe
function showPassword() {
  //Affichage mots de passe
  if (inputPasswordSignin.type === "password") {
    inputPasswordSignin.type = "text";
  } else {
    inputPasswordSignin.type = "password";
  }
}
