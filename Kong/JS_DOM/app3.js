// const textAll = document.querySelectorAll("ul");
// let message = textAll[1].innerHTML;
//console.log(textAll);

const menu = document.getElementById("menu");
let count = 1;

function addItem() {
  const item = document.createElement("li");
  item.setAttribute("id", "item-" + count);
  item.innerText = "Item " + count++;

  menu.appendChild(item);
}

function deleteItem() {
  const item = document.getElementById("item-" + --count);

  menu.removeChild(item);
}

function replaceItem() {
  const item = document.getElementById("item-" + (count - 1));
  const newItem = document.createElement("li");
  newItem.innerText = "999";
  
  menu.replaceChild(newItem, item);
}
