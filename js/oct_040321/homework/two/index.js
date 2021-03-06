/*
1. Запросить у пользователя произвольную строку
2. Из этой строки поместить все web адреса в массив. начало с http:// или https://
Пример:
исходная строка: информацию можно найти на сайте http://trololo.com или https://tralala.org
Результат: ['http://trololo.com', 'https://tralala.org']
*/

let text = prompt("Please enter your fucking message here",
"Информацию можно найти на сайте http://trololo.com или https://tralala.org");

console.log(getLinksFromText(text));

/* -------------------------------------------------------------------------- */

function getLinksFromText (str) {

  let keyWordsList = ["http://", "https://"];
  let lastPos = 0;
  let newArr = new Array();

  while (includesFromList(lastPos)) {

    keyWordsList.forEach(item => {

      let startPos = str.indexOf(item, lastPos);
      let endPos = str.indexOf(" ", startPos);

      endPos = endPos === -1 ? str.length : endPos;//Конец строки

      newArr.push(str.slice(startPos, endPos));
      lastPos = endPos;

    });


  }

  if (newArr.length === 0) return false;
  return newArr;

  function includesFromList (lastPos) {
    let result = false;

    for (let key of keyWordsList) {
      if (str.includes(key, lastPos)) {
        result = true;
        break;
      }
    }

    return result;
  }


}