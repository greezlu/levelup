/*
3.Создать массив из заданного пользователем количества элементов и заполнить его числами из промежутка заданного пользователем. Посчитать количество четных чисел в данном массиве. Посчитать количество простых чисел в массиве. Вывести в одном сообщении массив, и результаты.
*/

let myArr = getRandomArray (5, 10, 99);
let even = getEvenNumbers(myArr);
let prime = getPrimeNumbers(myArr);

alert("Array: ["+myArr+"]\n"+
      "Even numbers ("+even.length+"): ["+even+"]\n"+
      "Prime numbers ("+prime.length+"): ["+prime+"]");

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

function getEvenNumbers(arr) {
  let newArr = Array();
  for (let i=0;i<arr.length;i++) {
    if (arr[i]%2===0) newArr[newArr.length] = arr[i];
  }
  return newArr;
}

function isPrime (num) {

  let isNumPrime = true;

  for (let i=2;i<num;i++) {
    if (num%i === 0) {
      isNumPrime = false;
      break;
    }
  }

  return isNumPrime;

}

function getPrimeNumbers(arr) {
  let newArr = Array();
  for (let i=0;i<arr.length;i++) {
    if (isPrime(arr[i])) newArr[newArr.length] = arr[i];
  }
  return newArr;
}
