const countDownForm = document.getElementById("countDownForm");
const inputContainer = document.getElementById("input-container");
const dateEl = document.getElementById("date-picker");
const countDownEl = document.getElementById("countdown");

const countdownTitleEl = document.getElementById("countdown-title");
const countdownButtonEl = document.getElementById("countdown-button");
const timeEl = document.querySelectorAll("span"); //เพราะมีหลายตัว

const completeEl = document.getElementById("complete");
const completeInfoEl = document.getElementById("complete-info");
const completeButtonEl = document.getElementById("complete-button");

// ตัวแปรควบคุมการทำงาน
let countdownTitle = "";
let countdownDate = "";

let countdownValue = Date;
let countdownActive; //countdown time
let saveCountDown; //saveinfo as obj

// ตัวแปรแปรงหน่วยเวลา
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

countDownForm.addEventListener("submit", updateCountDown);
countdownButtonEl.addEventListener("click", reset);
completeButtonEl.addEventListener("click", reset);
callDatainStore();

function updateCountDown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  if (countdownTitle === "") {
    alert("ยังป้อนข้อมูลไม่ครบ");
  } else {
    //save in local storage
    saveCountDown = {
      title: countdownTitle,
      date: countdownDate,
    };
    localStorage.setItem("countDown", JSON.stringify(saveCountDown));
    countdownValue = new Date(countdownDate).getTime();
    setUpTime();
  }
}

function setUpTime() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    inputContainer.hidden = true;

    if (distance < 0) {
      countDownEl.hidden = true;
      completeEl.hidden = false;
      completeInfoEl.textContent = `${countdownTitle} วันที่ ${countdownDate}`;
      clearInterval(countdownActive);
    } else {
      countdownTitleEl.textContent = `${countdownTitle}`;

      timeEl[0].textContent = `${days}`;
      timeEl[1].textContent = `${hours}`;
      timeEl[2].textContent = `${minutes}`;
      timeEl[3].textContent = `${seconds}`;
      countDownEl.hidden = false;
      completeEl.hidden = true;
    }
  }, second);
}

function callDatainStore() {
  if (localStorage.getItem("countDown")) {
    inputContainer.hidden = true;
    saveCountDown = JSON.parse(localStorage.getItem("countDown"));
    countdownTitle = saveCountDown.title;
    countdownDate = saveCountDown.date;
    countdownValue = new Date(countdownDate).getTime();
    setUpTime();
  }
}

function reset() {
  localStorage.removeItem("countDown");
  countDownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive);
  countdownTitle = "";
  countdownDate = "";
}
