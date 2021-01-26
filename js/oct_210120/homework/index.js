let commandNumber,
    firstNumber,
    secondNumber,
    result;

commandNumber = prompt( "Please enter comand number:\n"
+"1. «+»\n"
+"2. «-»\n"
+"3. «*»\n"
+"4. «/»\n"
+"5. «++»\n"
+"6. «--»\n"
);


if (commandNumber === null) {
  commandNumber = "Operation canceled";
} else if (commandNumber === "" || !(+commandNumber > 0) || !(+commandNumber < 7) ) {
  commandNumber = "Incorrect command number";
} else {
  commandNumber = +commandNumber;
}


if (commandNumber > 0 && commandNumber < 7) {

  firstNumber = prompt("Please enter your number");

  if (firstNumber === null) {
    commandNumber = "Operation canceled";
  } else if (firstNumber === "" || !(+firstNumber > -Infinity && +firstNumber < Infinity)) {
    commandNumber = "Incorrect number";
  } else {
    firstNumber = +firstNumber;
  }

}


if (commandNumber<5) {

  secondNumber = prompt("Please enter your number");

  if (secondNumber === null) {
    commandNumber = "Operation canceled";
  } else if (secondNumber === "" || !(+secondNumber > -Infinity && +secondNumber < Infinity)) {
    commandNumber = "Incorrect number";
  } else {
    secondNumber = +secondNumber;
  }

}


switch (commandNumber) {
  case (1): {
    result = firstNumber + secondNumber;
    break;
  } case (2): {
    result = firstNumber - secondNumber;
    break;
  } case (3): {
    result = firstNumber * secondNumber;
    break;
  } case (4): {
    result = firstNumber / secondNumber;
    break;
  } case (5): {
    result = ++firstNumber;
    break;
  } case (6): {
    result = --firstNumber;
    break;
  } default : {
    result = commandNumber;
  }
}


alert("Result: " + result);