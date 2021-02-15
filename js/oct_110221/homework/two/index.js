/*
2.Запросить у пользователя длину, ширину и высоту комнаты(метры).
Проверить введенные значения на допустимость,
если какое либо значение введено не верно,
то сообщить об этом и заново запросить параметры.
Вычислить и вывести пользователю:
-сколько плинтусов нужно купить(шт по 2 метра)
-мощность кондиционера(кВт)
*/

function getRepairInfo () {

  let plinthAmount, airConPower;

  let width = getRoomParams("width"),
      length = getRoomParams("length"),
      height = getRoomParams("height");

  if (width === null || length === null || height === null) {
    return "Operation canceled";
  } else if (width && length && height) {
    plinthAmount = getPlinthsAmount(width, length);
    airConPower = getAirConPower(width, length, height);
  } else {
    alert("Incorrect data");
    return getRepairInfo();
  }

  return plinth+"\n"+airConPower;

  /*-------------------------------------------------------------------------*/

  function getAirConPower (width, length, height) {
    return "Air conditioning power: ["+(35*width*length*height/1000)+"] kWh";
  }

  function getPlinthsAmount (width, length) {

    if (width%2 !== 0) { width += 1-width%1 }
    if (length%2 !== 0) { length += 1-length%1 }

    return "You will need to buy: ["+(width+length)+"] plinths";

  }

  function getRoomParams (message) {
    return isNumCorrect( prompt("Please enter "+message+" (m)") );
  }

  function isNumCorrect (num) {

    if (num === null) {
      return null;
    } else if (num>0 && num<Infinity) {
      return +num;
    } else {
      return false;
    }

  }

}

alert ( getRepairInfo() );