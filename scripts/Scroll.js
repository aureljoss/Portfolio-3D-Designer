var text = document.querySelector("h1");
document.addEventListener("scroll", () => {
  text.style.left = window.scrollY * 5 + "px";
});