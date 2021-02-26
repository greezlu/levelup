/*
1. Создать массив из 10 случайных чисел [10;99]. В данном массиве найти минимальное и максимальное значение. (не использовать предопределенные методы).
*/

let myArr = getRandomArray (10, 10, 99);
let arrMin = getMinFromArray(myArr);
let arrMax = getMaxFromArray(myArr);

console.log(myArr, arrMax, arrMin);

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getRandomArray (amount, min, max) {
    let newArr = Array();
    for (let i=0;i<amount;i++) {
        newArr[newArr.length] = randomInteger(min,max);
    }
    return newArr;
}

function getMaxFromArray (arr) {
  let max = -Infinity;
  for (let i=0;i<arr.length;i++) {
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
}

function getMinFromArray (arr) {
  let min = Infinity;
  for (let i=0;i<arr.length;i++) {
    min = arr[i] < min ? arr[i] : min;
  }
  return min;
}
