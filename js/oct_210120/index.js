/*

Запросить порядковый номер пальца руки
Проверить введённый номер на допустимость
Если номер - допустимый: вывести название пальца
Нумерация - с большого пальца

 */

/*

let fingerNumber = +prompt("Введите номер пальца");
let fingerName = "Неизвестно какой";

if (fingerNumber == 1) {
    fingerName = "Большой";
} else if (fingerNumber == 2) {
    fingerName = "Указательный";
} else if (fingerNumber == 3) {
    fingerName = "Средний";
} else if (fingerNumber == 4) {
    fingerName = "Безымянный";
} else if (fingerNumber == 5) {
    fingerName = "Мизинец";
}

alert("Ваш палец: " + fingerName);

*/

/*

let a = 9;

switch (a) {
    case (1): {
        alert(1);
    } case 2: {
        alert(2);
    } case (3): {
        alert(3);
    } case (4): {
        alert(4);
        // break;
    } case (5):
        alert(5);
    default: {
        alert("default");
    }
}

 */

/*


for (let i=1; i<=10; i++) {
    if (i%2==0) {alert(i)}
};

*/


/*
let num = 0;
do {
    num = prompt("Less than 100: " + num);
} while (num<100);
*/

/*

let num = +prompt("Enter number", 10);

nextPrime: for (let i=2; i<num; i++) {

    for (let a=2;a<i;a++) {
      if (i%a == 0) continue nextPrime;
    }

    console.log(i);

}

*/


/*

Запросить
Введите номер команды
Проверить "на допустимость" (пиздец, не знаю что это блять такое)
Если проверка пройдена, запросить числа, выполнить действия, вывести результат

 */


 // function checkAge(age) {
 //   if (age > 18) {
 //     return true;
 //   } else {
 //     return confirm('Родители разрешили?');
 //   }
 // }

// let age = prompt("Age", 17)
// checkAge(age);
//
// function checkAge(age) {
//   // return age > 18 ? true : confirm('Родители разрешили?');
//   return age > 18 || confirm('Родители разрешили?');
// }

// function min (a,b) {
//   // if (a<b) return a;
//   // return b;
//
//   return a<b ? a : b;
//
// }

/*
let x = prompt("Number one");
let n = prompt("Number two");

alert( pow (x,n) );

function pow (x,n) {

  let a = x;

  for (let i=1; i<n; i++) {
    a *= x;
  }

  return a;

}

*/









