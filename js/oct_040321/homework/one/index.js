/*
I
1. создать прототип мотоцикл(марка, модель, объем двигателя)
2.на основании прототипа создать массив из 5 мотоциклов
3.вывести в alert все мотоциклы
4.отсортировать мотоциклы в массиве по марке, модели, объему двигателя
5.вывести в alert все мотоциклы
*/

let motoList, sortedMotoList;

let motoNamesList = {
  mark: ["BMW", "Ducati", "Honda", "Yamaha", "Kawasaki", "Suzuki", "KTM", "Triumph", "Bonneville", "Confederate"],
  model: ["V4S", "S1000RR", "SP", "YZF-R1M", "H2", "SE", "Fireblade", "R1", "GSX-R1000R", "V2"],
  volume: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900]
}

//1. Создать прототип мотоцикл (марка, модель, объем двигателя)
class Motorcycle {

  constructor (mark, model, volume) {
    this.mark = mark;
    this.model = model;
    this.volume = volume;
  }

  [Symbol.toPrimitive] (hint) {
    if (hint === "string") {
      return this.mark + " | " + this.model + " | " + this.volume;
    }
  }

}

//2. На основании прототипа создать массив из 5 мотоциклов
motoList = createMotoArray(5);

//3. Вывести в alert все мотоциклы
alert(motoList);
console.log(motoList);

//4. Отсортировать мотоциклы в массиве по марке, модели, объему двигателя
sortedMotoList = motoSort(motoList);
console.log(sortedMotoList);

//5. Вывести в alert все мотоциклы
alert("Before:\n" + String(motoList) + "\n" + "After:\n" + String(sortedMotoList));

/* -------------------------------------------------------------------------- */

function createMotoArray (amount) {
  let newArr = new Array();

  for (let i=0; i<amount;i++) {
    newArr.push(getRandomMoto());
  }

  function getRandomMoto () {

    let mark = motoNamesList.mark[randomInteger(0,9)];
    let model = motoNamesList.model[randomInteger(0,9)];
    let volume = motoNamesList.volume[randomInteger(0,9)];

    return new Motorcycle (mark, model, volume);

    function randomInteger (min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.abs(Math.round(rand));//JS почему-то может выдать "-0"
    }

  }

  newArr[Symbol.toPrimitive] = function (hint) {
    if (hint !== "string") { return false }
    let message = "";
    newArr.forEach(item=>message += String(item)+"\n");
    return message;
  }

  return newArr;

}

function motoSort (arr) {
  let newArr = arr.slice();

  //Функция .slice не копирует символы
  newArr[Symbol.toPrimitive] = function (hint) {
    if (hint !== "string") { return false }
    let message = "";
    newArr.forEach(item=>message += String(item)+"\n");
    return message;
  }

  let compareList = ["mark", "model", "volume"];//Можно задать порядок сравнения

  newArr.sort((a,b)=>{

    let result = 0;

    for (let i=0; i<compareList.length; i++) {

      let prop = compareList[i];
      let aC = typeof a[prop] === "string" ? a[prop].toLowerCase() : a[prop];
      let bC = typeof b[prop] === "string" ? b[prop].toLowerCase() : b[prop];

      if ( aC > bC ) {
        result = 1;
        break;
      } else if (aC == bC) {
        result = 0;
      } else if (aC < bC) {
        result = -1;
        break;
      }

    }

    return result;

  });



  return newArr;
}