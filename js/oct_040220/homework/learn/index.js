/*
function ucFirst (str) {
  return str[0].toUpperCase() + str.substr(1);
}

console.log( ucFirst("вася") );
*/

/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/

function getMaxSubSum (arr) {

  let maxSubSum = 0;

  for (let i=0;i<arr.length;i++) {

    let currentSum = 0;

    for (let j=i;j<arr.length;j++) {
      currentSum += arr[j];
      maxSubSum = Math.max(maxSubSum, currentSum);
    }

  }

  console.log("maxSubSum", maxSubSum);

}

let arr = [1, -2, 3, 4, -9, 6];

getMaxSubSum([-1, 2, 3, -9]); // = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]); // = 6
getMaxSubSum([-1, 2, 3, -9, 11]); // = 11
getMaxSubSum([-2, -1, 1, 2]); // = 3
getMaxSubSum([100, -9, 2, -3, 5]); // = 100
getMaxSubSum([1, 2, 3]); // = 6 (берём все)
getMaxSubSum([-1,-2, -3]); // = 6 (берём все)