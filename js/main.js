const irArriba = document.querySelector(".btn-Arriba");

irArriba.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  if (window.scrollY < 300) {
    irArriba.style.left = -100 + "px";
  } else {
    irArriba.style.left = 5 + "px";
  }
});
