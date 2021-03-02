/*
2. Создать массив из 8 элементов и заполнить его
случайными дробными числами у которых 2 знака в целой части
и 2 знака в дробной части. Вывести его.
*/

let myArr = getRandomArray (5, 10, 99);
alert(myArr);

function randomAccInteger(min, max, accuracy) {
  accuracy = "1e"+accuracy;
  accuracy = +accuracy; //Number(accuracy)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand*accuracy)/accuracy;
}

function getRandomArray (amount, min, max) {
    let newArr = Array();
    for (let i=0;i<amount;i++) {
        let num = ""+randomAccInteger(min,max,2);//String(num)
        if (num.length===2) num += ".";
        let length = 5-num.length; //Fix
        for (let k=0; k<length;k++) {
          num += "0";
        }
        newArr[newArr.length] = num;
    }
    return newArr;
}
