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



// Product Details Code


let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("sm-img");

smallImg[0].addEventListener("click", () => {
  mainImg.src = smallImg[0].src;
});

smallImg[1].addEventListener("click", () => {
  mainImg.src = smallImg[1].src;
});

smallImg[2].addEventListener("click", () => {
  mainImg.src = smallImg[2].src;
});

smallImg[3].addEventListener("click", () => {
  mainImg.src = smallImg[3].src;
});
