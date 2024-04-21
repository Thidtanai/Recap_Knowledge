let a1 = document.getElementById("demo");
let a2 = document.querySelector("#demo");
let b1 = document.getElementsByTagName("p");
let b2 = document.querySelectorAll("p");
let c = document.querySelector(".myJS");

let x = 10;
let y = 20;
function displayText() {
  //   a.innerText = "<strong>สอน JS เบื้องต้น</strong>";
  //   a.innerHTML = "<strong>สอน JS เบื้องต้น</strong>";
  a.innerHTML = `<strong>แสดงข้อมูล x + y = ${x + y}</strong>`;
}
