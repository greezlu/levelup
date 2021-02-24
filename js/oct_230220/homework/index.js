let newArr = Array();

for (let i=0;i<10000;i++) {
  let num = Math.random()*100;
  if (num%1 >= 0.5) {
    num += 1-num%1;
  } else {
    num -= num%1;
  }
  newArr.push(num);
}

console.log( mySort(newArr) );

// Моя сортировка
function mySort(arr) {
  let a;
  for (let k=0;k<arr.length;k++) {
    for (let i=0;i<arr.length-k;i++) {
    if (arr[i]>arr[i+1]) {
      a = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = a;
    }
  }
}
  return arr;
}


// Сортировка нормального человека
/*
function insertionSort(inputArr) {
    let length = inputArr.length;
        for (let i = 1; i < length; i++) {
            let current = inputArr[i];
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
*/