/*
Принимает длины сторон А и Б фигуры,
а также третий параметр логического типа,
который указывает тип фигуры
true - прямоугольник
false - прямоугольный треугольник
Вычислить площадь фигуры и возвращать её
Возможность не указывать тип фигуры, true - пол умолчанию
*/

/*
function getSquare (a,b,figure=true) {
    return figure ? a*b : a*b/2;
}
*/

/*
Ф-я принимает число и степень.
Вычисляет рекурсией результат и возвращает его
*/

/*
function pow (a,b) {
    if (b>0) { return pow(a,b-1)*a }
    return 1;
}
*/

function unique(arr) {
    // let newSet = new Set ();
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O