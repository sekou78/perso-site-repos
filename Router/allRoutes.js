import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil Non Connecté", "../pages/noConnected.html", [
    "disconnected",
  ]),
  new Route("/home", "Accueil Connecté", "../pages/home.html", ["connected"]),
  new Route("/repositories", "Repositories", "../pages/repositories.html", [
    "connected",
  ]),
  new Route(
    "/compte",
    "Compte",
    "../pages/auth/compte.html",
    ["connected"],
    "/js/auth/compte.js"
  ),
  new Route(
    "/inscription",
    "Inscription",
    "../pages/auth/inscription.html",
    [],
    "/js/auth/inscription.js"
  ),
  new Route(
    "/connexion",
    "Connexion",
    "../pages/auth/connexion.html",
    [],
    "/js/auth/connexion.js"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Mon Github";
