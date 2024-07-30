// import { Octokit } from "https://esm.sh/octokit";

// const test = new Octokit({});

// test.rest.repos
//   .get({
//     owner: "sekou78",
//     repo: "restaurant",
//   })
//   .then(({ data }) => {
//     // console.log("Réçu", data);
//     // console.log(data.owner);
//   });

// // console.log(test);
// // console.log(test.rest.users);

import { Account } from "./auth/compte.js";

new Account();
