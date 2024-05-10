function welcome(){
    alert("Welcome to My Website.")
}

function hightlight(obj){
    obj.style.background = "yellow";
}

function unHightlight(obj){
    obj.style.background = "white";
}

function getMenu(){
    const menu = document.getElementById("menu");
    const display = document.getElementById("display");
    display.innerText = menu.value.toUpperCase();
}