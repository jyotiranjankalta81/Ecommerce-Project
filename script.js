let hamBtn = document.getElementById("hamBurger");
let navBar = document.getElementById("navListItems");
let closeBtn = document.getElementById("arrowClose");
let selectAll = document.getElementById("selectAll");

if (hamBtn) {
  hamBtn.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}
if (arrowClose) {
  arrowClose.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}
if (selectAll) {
  selectAll.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}
