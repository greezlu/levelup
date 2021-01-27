let firstNumber = +prompt("Please enter first number", 1);
let secondNumber = +prompt("Please enter second number", 2);
let currentNumber;
let i=10;
let message = "";

while (i--) {
  currentNumber = firstNumber + secondNumber;
  message += currentNumber + " ";
  firstNumber = secondNumber;
  secondNumber = currentNumber;
}

alert(message);