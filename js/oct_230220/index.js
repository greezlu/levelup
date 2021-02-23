/*
Обьявить массив numbers
5 произвольных значений
Вывести alert
*/

/*
let numbers = [3,4,5,6,7];

function getArraySum (arr) {
    let message = arr[0];
    let sum = arr[0];
    for (let i=1; i<arr.length;i++) {
        message += " + "+arr[i];
        sum += arr[i];
    }
    return message + " = " + sum/arr.length;
}

alert(getArraySum(numbers));
*/

/*--------------------------------------*/

/*
Запросить 5 значений
Введённые значения сохранять в массиве
Вывести:
все значения из массива через заяпятую
а также их ср.знач.
*/

/*
function getMealCost (days = 5) {

    let arr = [];

    for (let i=0;i<days;i++) {
        arr[i] = +prompt("Please enter your number");
    }

    let message = arr[0];
    let sum = arr[0];

    for (let i=1; i<arr.length;i++){
        message += ", "+arr[i];
        sum += arr[i];
    }

    return message + "\n" + "average: " + sum/days;

}

alert(getMealCost());
*/

/*
Создать массив на 10 значений
сортировка массива по возрастанию
*/

let newArr = Array();

for (let i=0;i<10000;i++) {
  newArr.push(Math.random()*100);
}

// console.log(newArr);

let date = Date.now();
// console.log(bubbleSort([4,1,6,73,1,7,10,100,3]));
// console.log( bubbleSort(newArr) );
bubbleSort(newArr);
console.log(Date.now() - date);

/*
function bubbleSort (arr) {
    for (let i=0;i<arr.length;i++) {
        let a = null;
        for (let k=i;k<arr.length-i;k++) {
            if (arr[k]>arr[k+1]) {
                a = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = a;
            }
        }
        for (let j=arr.length-i;j>=i;j--) {
            if (arr[j]<arr[j-1]) {
                a = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = a;
            }
        }
        if (a === null) break;
    }
    return arr;
}
*/


function bubbleSort (arr) {
    for (let i=0;i<arr.length;i++) {
      for (let k=i+1;k<arr.length-i;k++) {
            if (arr[i]>arr[k]) {
                let a = arr[i];
                arr[i] = arr[k];
                arr[k] = a;
            }
        }
    }
    return arr;
}


/*
function bubbleSort (arr) {
  let reverce = false;
  for (let i=0;i<arr.length;i++) {
    if (!reverce){
      for (let k=i+1;k<arr.length;k++) {
        if (arr[i]>arr[k]) {
          let a = arr[i];
          arr[i] = arr[k];
          arr[k] = a;
        }
      }
      reverce = true;
    } else {
      for (let k=arr.length;k>i;k--) {
        if (arr[i]>arr[k]) {
          let a = arr[i];
          arr[i] = arr[k];
          arr[k] = a;
        }
      }
      reverce = false;
    }

    }
    return arr;
}
*/

/*
function bubbleSort (arr) {
    for (let i=0;i<arr.length;i++) {
        let a = null;
        for (let k=0;k<arr.length-i;k++) {
            if (arr[k]>arr[k+1]) {
                a = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = a;
            }
        }
        if (a) arr = bubbleSort(arr);
    }
    return arr;
}
*/

/*
function bubbleSort (arr) {

  let a;

  do {
    a = null;
    for (let i=0;i<arr.length-i;i++) {
      if (arr[i]>arr[i+1]) {
          a = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = a;
        }
    }
  } while (a);

  return arr;
}

*/

