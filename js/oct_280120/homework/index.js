/*
Запросить:
1. Исходную сумму займа
2. Длительность займа в месяцах
3. Процентную ежемесячную ставку
Расчитать сложный процент
*/

/*

let amount = +prompt("Please enter start amount", 1500);
let period = +prompt("Please enter period time (month)", 5);
let rate = +prompt("Please enter rate (%)", 10);

while (period--) {
  amount += amount * rate/100;
}

alert(amount);

*/

/* -------------------------------------------------------------------------- */

/*
Запросить:
1. Произвольное число
Дать ответ является чи число простым
Доп. проверки
*/

/*

let mainNumber = prompt("Please enter your number");
let error;

if (mainNumber === "") {
  error = "Incorrect number";
} else if ( !(mainNumber > -Infinity && mainNumber < Infinity) ) {
  error = "Sorry, but your number is not \"finite\"";
} else if (mainNumber%1 !== 0) {
  error = "Sorry, but your number is not \"integer\"";
} else if (mainNumber < 2) {
  error = "Sorry, but your number less than 2";
} else if (mainNumber === null) {
  error = "Operation canceled";
} else {
  mainNumber = +mainNumber;
}

if (!error) {

  let isPrime = true;

  for (let i=2;i<mainNumber;i++) {
    if (mainNumber%i === 0) {
      isPrime = false;
      break;
    }
  }

  alert("Is your number prime? " + isPrime);

} else {
  alert(error);
}

*/

/* -------------------------------------------------------------------------- */

/*
Запросить число в промежутке [2;20]
количество строк
при помощи символа * вывести алерт равнобетренный треугольник
*/

/*

let mainNumber = +prompt("Please enter your number [2;20]");
let message = "";
let error;

if (mainNumber === "") {
  error = "Incorrect number";
} else if ( !(mainNumber > -Infinity && mainNumber < Infinity) ) {
  error = "Sorry, but your number is not \"Finite\"";
} else if (mainNumber%1 !== 0) {
  error = "Sorry, but your number is not \"Integer\"";
} else if (mainNumber < 2 || mainNumber>20) {
  error = "Sorry, but your number needs to be in a range [2;20]";
} else if (mainNumber === null) {
  error = "Operation canceled";
}

if (!error) {

  mainNumber = +mainNumber;
  let maxSymbols = mainNumber*2-1;

  for (let i=1;i<=mainNumber;i++) {

    let maxStars = i*2-1;
    let string = "";

    for (let k=0;k<maxSymbols;k++) {

      let emptySpace = (maxSymbols-maxStars)/2;

      if (k<emptySpace || k>=maxStars+emptySpace) {
        string += " ";
      } else {
        string += "*";
      }

    }

    message += string + "\n";
  }

  alert(message);
  console.log(message);

} else {
  alert(error);
}

*/

/* -------------------------------------------------------------------------- */

/*

let id = Symbol("id");
let newID = Symbol.for("id");

console.log(id === newID);

console.log(Symbol.keyFor(id));
console.log(Symbol.keyFor(newID));

console.log(id.description);
console.log(newID.description);


*/









