/*
функция принимает порядковый номер дня недели
возвращает название

запрашивает порядковый номер дня недели
при помощи ранее реализованной функции выводит название дня недели
*/

/*
function getDayName (dayNum) {

    let dayName;

    switch (dayNum){
        case (1):{
            dayName = "Понедельник";
            break;
        } case (2):{
            dayName = "Вторник";
            break;
        } case (3):{
            dayName = "Среда";
            break;
        } case (4):{
            dayName = "Черверг";
            break;
        } case (5):{
            dayName = "Пятница";
            break;
        } case (6):{
            dayName = "Суббота";
            break;
        } case (7):{
            dayName = "Воскресенье";
            break;
        } default:{
            dayName = "Неверно введённый номер"
        }
    }
    return dayName;
}

function getDayNum () {
    let dayNum = +prompt("Введите номер дня недели");
    alert( getDayName(dayNum) );
}

getDayNum();
*/

/*
let arr = [ 1, 2, 15, 3, 9 ];
arr.sort(function(a, b) { return a - b; });
alert(arr);  // 1, 2, 15
*/

/*
function camelize (str) {
    let splitStr = str.split("-");
    console.log(splitStr);
    splitStr.forEach((item, index)=>{
        // console.log(item,index);
        if (index > 0) splitStr[index] = item[0].toUpperCase() + item.slice(1);
        if (splitStr[index] === "") splitStr.splice(index,1);
    })
    alert(splitStr.join(""));
}

function camelize(str) {
    alert str
            .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
            .map(
                    // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
                    // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
                    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
            .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
*/


/*
1. Принимает число.
Проверяет, является ли оно четным
Возвращает ответ да/нет

2. Принимает начало и окончание промежутка целых чисел
Возвращает строку из всех четных чисел в указанном промежутке через запятую

3. Запрашивает начало и окончание промежутка числел
Выводит на экран все четные числа из заданного промежутка
*/

/*
function isEven (num) {
    return num%2 === 0 ? true : false;
}

function getEvensFromRange (from, to) {
    let resultLine = "";
    for (let i=from;i<=to;i++) {
        if (isEven(i)) {
            resultLine += i;
            if (i+1 !== to && i !== to) resultLine += ", ";
        }
    }
    return resultLine;
}

function getEvensFromPrompt () {
    let from = +prompt("Please enter first number");
    let to = +prompt("Please enter last number");
    let resultLine = getEvensFromRange (from, to);
    alert (resultLine);
}

getEvensFromPrompt();
*/

/*
function filterRange (arr, min, max) {
  return arr.filter(item => (item >= min && item <= max));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/

/*
function filterRangeInPlace (arr, min, max) {
  arr.map((item,index)=>{
    if (item>max || item < min) {
      arr.splice(index,1);
    }
  });
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
*/


/*
let arr = [5, 2, 1, -10, 8];

arr.sort((a,b)=>{b-a});

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/

/*
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted (arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

/*
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

function Calculator () {

  let mathMethods = {
    "+": (a,b)=>a+b
  }

  this.calculate = function (str) {
    let method = str.split(" ")[1];
    let operandOne = Number( str.split(" ")[0] );
    let operandTwo = Number( str.split(" ")[2] );
    return mathMethods[method](operandOne,operandTwo);
  }

  this.addMethod = function (name, func) {
    mathMethods[name] = func;
  }

}
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item=>item.name);



alert( names ); // Вася, Петя, Маша

*/

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user=>({
  fullName: user.name + " " + user.surname,
  id: user.id
}));

console.log(usersMapped)
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

function sortByAge (arr) {
  arr.sort((a,b)=>a.age - b.age);
}

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

/*
let arr = [1, 2, 3];

function shuffle (arr) {
  arr.sort((a,b)=>Math.random()*-0.5)
}

shuffle(arr)
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr)
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr)
console.log(arr);
// arr = [3, 1, 2]
// ...
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge (arr) {
  return arr.reduce((val, user)=>(val+user.age),0) / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/


