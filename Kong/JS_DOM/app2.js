const titleEl = document.getElementById("title");
const contentEl = document.querySelector(".content");
const allEl = document.querySelectorAll("p");

const box = document.querySelector(".light");

function displayText() {
  /* Version 1 */
  //   titleEl.style.color = "red";
  //   titleEl.style.backgroundColor = "yellow";
  //   titleEl.style.fontSize = "60px";

  /* Version 2 */
  contentEl.setAttribute("class", "thid");
  box.setAttribute("class", "dark");
}
function darkMode() {
  box.setAttribute("class", "dark");
}
function lightMode() {
  box.setAttribute("class", "light");
}
