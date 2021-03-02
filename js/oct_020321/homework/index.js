/*
Использую только методы объекта Array выполнить следующие действия(действия по перебору массива циклом использовать ЗАПРЕЩЕНО):
-Объявить массив из 15 элементов и заполнить его случайными [100;200] числами.
-Найти сумму всех чисел в массиве
-получить новый массив состоящий из четных значений исходного массива
-найти первое число, которое кратно 10
-отсортировать исходный массив по убыванию
*/

let myArr = getRandomArray(15);
console.log("Array with random numbers: \n", myArr);

let sum  = myArr.reduce(getReducedSum, myArr[0]);
console.log("Sum of the array: \n", sum);

let evenArr = myArr.filter(getEvenArray);
console.log("Array with even numbers: \n", evenArr);

let evenToTen = myArr.find(getEvenToTen);
console.log("Array with even to 10 numbers: \n", evenArr);

myArr.sort((a,b)=>b-a);
console.log("Sorting in reverce: \n", myArr);

/*-----------------------------------------------------*/

function getEvenToTen (item) {
 if (item%10===0) return true;
}

function getEvenArray (item) {
  if (item%2===0) return true;
}

function getReducedSum (prevVal, item) {
  return prevVal + item;
}

function getRandomArray (amount) {

  let newArr = new Array(amount); //Creates an array without elements
  newArr.fill(null); //Fill the array to create elements

  newArr.forEach((item, i) => {
    newArr[i] = randomInteger(100, 200);
  });

  return newArr;

}

function randomInteger (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}