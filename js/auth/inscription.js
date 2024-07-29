const inputMail = document.getElementById("InputEmail");
const inputPassword = document.getElementById("InputPassword");
const inputValidatePasswordConfim = document.getElementById(
  "InputPasswordConfirm"
);
const inscriptionBtn = document.getElementById("btn-inscription");

const checkPassword = document.getElementById("Check1");

inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePasswordConfim.addEventListener("keyup", validateForm);
checkPassword.addEventListener("click", showAllPassword);
inscriptionBtn.disabled = true;

//Function permettant de valider tout le formulaire 1
function validateForm() {
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const validateConfirmPasswordOk = validateConfirmationPassword(
    inputPassword,
    inputValidatePasswordConfim
  );

  if (mailOk && passwordOk && validateConfirmPasswordOk) {
    inscriptionBtn.disabled = false;
  } else {
    inscriptionBtn.disabled = true;
  }
}

//Function permettant de valider tout le formulaire 2
function validateRequired(input) {
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
function validateMail(input) {
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
function validatePassword(input) {
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

//Validation de la confirmation du mot de passe
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputConfirmPwd.value === inputPwd) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}

//Affichage des mots de passe
function showAllPassword() {
  //Affichage mots de passe
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
  //Affichage mots de passe confirmation
  if (inputValidatePasswordConfim.type === "password") {
    inputValidatePasswordConfim.type = "text";
  } else {
    inputValidatePasswordConfim.type = "password";
  }
}
