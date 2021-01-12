// var message = "Закончить?";
// let toCont = confirm (message);
// alert(toCont);

// var questionText, answer, resultMessage;
//
// questionText = "Сколько вам лет?";
// answer = prompt(questionText);
//
// resultMessage = "Вам " + answer + " лет";
// alert (resultMessage);


/*
Запрос доступного мяса (гр)
Количество мяса в одной порции (гр)
Сколько полных порций шашлыка можно сделать
 */

// var meatAmount = prompt ("Общее количество мясо (гр)");
// var oneMealSize = prompt ("Количество мяса в одной порции (гр)");
//
// meatAmount = +meatAmount;
// oneMealSize = +oneMealSize;
//
// // var maxPortions = (meatAmount - (meatAmount%oneMealSize)) / oneMealSize;
// var maxPortions = meatAmount/oneMealSize - ((meatAmount/oneMealSize)%1);
// alert( "Количество полных порцый: " + maxPortions);

var inputNumber = prompt ("Введите число");
inputNumber = +inputNumber;

var isEven = (inputNumber%2) === 0;
alert ("Четное число: " + isEven);

