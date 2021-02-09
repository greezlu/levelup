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