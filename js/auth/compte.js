class Account {
  constructor() {
    this.imgProfilAccount = document.querySelector("avatar-profil");
    this.pseudoAccountGit = document.querySelector(".pseudo-git");
    this.descriptionAccountGit = document.querySelector(".description-git");
    this.APIdata = {};

    this.getProfilInfos();
  }
}
export { Account };
