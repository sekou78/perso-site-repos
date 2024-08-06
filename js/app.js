const tokenCookieName = "accessToken";
const sigoutBtn = document.getElementById("sigout-Btn");
const RoleCookieName = "role";

sigoutBtn.addEventListener("click", signout);

function setToken(token) {
  setCookie(tokenCookieName, token, 1);
}

function getToken() {
  return getCookie(tokenCookieName);
}

//Permet de placer un cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

//Permet de récuperer un cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

//Permet de supprimer un cookie
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

//Vérification si l'utilisateur est connecter ou pas
function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}
// //Appel de la fonction isConnected
// if (isConnected()) {
//   alert("Je suis dans la place");
// } else {
//   alert("Vous êtes OUT de la place");
// }

//fonction de deconnexion
function signout() {
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);
  window.location.reload("/");
}

//Méthode pour récuperer le rôle de l'utilisateur
function getRole() {
  return getCookie(RoleCookieName);
}

function showAndHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show");

  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connected":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      // case "admin":
      //   if (!userConnected || role != "admin") {
      //     element.classList.add("d-none");
      //   }
      //   break;
      // case "client":
      //   if (!userConnected || role != "client") {
      //     element.classList.add("d-none");
      //   }
      //   break;
    }
  });
}
