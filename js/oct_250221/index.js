function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getArray (amount) {
    let newArr = Array();

    for (let i=0;i<amount;i++) {
        newArr.push(Math.trunc(randomInteger(0,100)));
    }
    return newArr;
}

/*
Принимает массив чисел
Возвращает все числа, кратніе 10 в виде массива
 */

function getEqual (arr, condition) {
    let newArr = Array();
    for (let i=0;i<arr.length;i++) {
        if (condition(arr[i])) newArr[newArr.length] = arr[i];
    }
    return newArr;
}

alert(getEqual(getArray(20),i=>i%10===0));