/*
Двумерный массив 5х3
Заполнить случайными числами от 10 до 99
Вывести таблицей
*/

let arr = getRandomArray(5,3);
console.log(logTableArray(arr));

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getRandomArray (rows, cells) {
    let newArr = Array();
    for (let i=0;i<rows;i++) {
        newArr[i] = Array();
        for (let j=0;j<cells;j++) {
            newArr[i][j] = randomInteger(10,99);
        }
    }
    return newArr;
}

function logTableArray (arr) {
    let message = "";
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
            message += arr[i][j];
            message += j+1==arr[i].length ? "" : " ";
        }
        message += "\n";
    }
    return message;
}