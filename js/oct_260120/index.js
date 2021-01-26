/*

let dayNum = +prompt("Введите номер дня недели");
let dayName;

switch (dayNum) {
    case(1): {
        dayName = "Понедельник";
        break;
    } case(2): {
        dayName = "Вторник";
        break;
    }  case(3): {
        dayName = "Среда";
        break;
    }  case(4): {
        dayName = "Четверг";
        break;
    }  case(5): {
        dayName = "Пятница";
        break;
    }  case(6): {
        dayName = "Суббота";
        break;
    }  case(7):
       case(0): {
        dayName = "Воскресенье";
        break;
    }  default: {
        dayName = "Неверный номер";
    }
}

alert("День недели: "+dayName);

*/


/*

 /*
let message ='';
let num = 1;
while(num<=10){
message += num + " ";
num++;
}
alert(message);

*/

/*
Запросить 2 числа
Начало и конец промежутка целых чисел
Сформировать строку из всех целых чисел в промежутке
*/

let firstNumber = prompt("First number",1);
let secondNumber = +prompt("Second number", 10);
let num = firstNumber;
let message = "";

while(firstNumber<=secondNumber){
    firstNumber += firstNumber++ + " ";
}

alert(firstNumber);

/*
Запросить 2 числа
Сформировать строку
выводить 10 чисел последоватьельности фибоначи
текущеечисло = сумме предыдущих двух чисел
*/