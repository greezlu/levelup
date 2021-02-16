/*
Создайте функцию unique(arr),
которая вернёт массив уникальных,
не повторяющихся значений массива arr.
*/

/*
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

*/

/*
Объект building
Свойства:
Длинна: 50
Ширина: 20
Этажи: 10
цвет: зелёный
Метод:
showDescription:
полное описание
цвет, длина, ширина, кол. этажей, общая площадь
*/

/*
let building = {
    length: 50,
    width: 20,
    floors: 10,
    color: "Зеленый",
    toStringParam: function (paramName, paramValue) {
        return paramName+": "+paramValue+"\n";
    },
    showDescription: function () {
        alert(
                this.toStringParam("Цвет", this.color)+
                this.toStringParam("Длина", this.length)+
                this.toStringParam("Ширина", this.width)+
                this.toStringParam("Кол. этажей", this.floors)+
                this.toStringParam("Площадь", (this.width * this.length * this.floors))
        );
    }
}

building.showDescription();

*/

/*

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries (obj) {
    let sum = 0;
    Object.values(obj).forEach(item=>sum+=item);
    return sum;
}

*/

/*
let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2

function count (obj) {
    return Object.keys(obj).length;
}

*/

/*
реализовать прототип Car
Свойства:
Марка, модель, цвет
Имеется метод toString
создать два автомобиля
Белый ЗАЗ 968М
Черный Тесла Model S
*/

/*
function Car (mark, model, color) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.toString = function () {
        return "Марка: "+this.mark+"\n"+
               "Модель: "+this.model+"\n"+
               "Цвет: "+this.color;
    }
}

let car1 = new Car("ЗАЗ", "968М", "Белый");
let car2 = new Car("Tesla", "Model S", "Черный");

alert(car1 + "\n\n" + car2);

*/