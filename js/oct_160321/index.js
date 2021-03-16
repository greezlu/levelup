/*
let button = document.getElementById("calc");
button.addEventListener("click", calculate);

function calculate (e) {
    let firstNumber = document.getElementById("first").innerText;
    let secondNumber = document.getElementById("second").innerText;
    let result = document.getElementById("result");
    result.innerText = Number(firstNumber) + Number(secondNumber);
}
*/

let widthButton = document.getElementById("widthButton");
let heightButton = document.getElementById("heightButton");
let mainArea = document.getElementById("mainArea");

widthButton.addEventListener("click", increaseWidth);
heightButton.addEventListener("click", increaseHeight);

function increaseWidth () {
    let currentWidth = getComputedStyle(mainArea).width;
    currentWidth = parseInt(currentWidth);
    mainArea.style.width = (currentWidth + 10) + "px";
}

function increaseHeight () {
    let currentHeight = getComputedStyle(mainArea).height;
    currentHeight = parseInt(currentHeight);
    mainArea.style.height = (currentHeight + 10) + "px";
}