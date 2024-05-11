// Ref
const menu = document.getElementById("menu");
const display = document.getElementById("display");
const btn = document.getElementById("btn");

// Event
menu.addEventListener("change", getMenu);
btn.addEventListener("click", showWelcome);

function getMenu() {
  display.innerText = menu.value;
}

function showWelcome() {
  alert("Welcome to Webpage");
}
