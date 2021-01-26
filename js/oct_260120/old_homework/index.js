let commandNumber,
    firstNumber,
    secondNumber,
    result;

commandNumber = prompt("Enter comand number:\n"
+"1. \"+\"\n"
+"2. \"-\"\n"
+"3. \"*\"\n"
+"4. \"/\"\n"
+"5. \"++\"\n"
+"6. \"--\"\n"
);

if (commandNumber === null) {
    commandNumber = "Operation canceled";
} else if ( commandNumber === "" || !(commandNumber>0) || !(commandNumber<7) ) {
    commandNumber = "Incorrect comand number";
} else {
    commandNumber = +commandNumber;
}

if (commandNumber>0 && commandNumber<7) {

    firstNumber = prompt("Enter your number");

    if (firstNumber === "") {
        commandNumber = "Incorrect number";
    } else if (firstNumber === null) {
        commandNumber = "Operation canceled";
    } else if (firstNumber > -Infinity && firstNumber < Infinity) {
        firstNumber = +firstNumber;
    } else {
        commandNumber = "Incorrect number";
    }

}

if (commandNumber>0 && commandNumber<5) {

    secondNumber = prompt("Enter second number");

    if (secondNumber === "") {
        commandNumber = "Incorrect number";
    } else if (secondNumber === null) {
        commandNumber = "Operation canceled";
    } else if (+secondNumber > -Infinity && +secondNumber < Infinity) {
        secondNumber = +secondNumber;
    } else {
        commandNumber = "Incorrect number";
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
    } default: {
        result = commandNumber;
    }
}

alert("Result: "+result);