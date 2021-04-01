<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>oct-010421</title>
</head>
<body>
<?php
echo "<pre>";

//Создать массив из 15 элементов
echo "Empty: \n";
$array = array_fill(0, 15, true);
var_dump($array);

//Заполнить его случайными числами в промежутке [10;99]
echo "\nRandom: \n";
array_walk($array, function (&$val) {
  $val = random_int(10,99);
});
var_dump($array);

//Найти в данном массиве минимальное и максимальное числа
echo "\nMin: ".min($array)."\n";
echo "Max: ".max($array)."\n";

//Посчитать сумму
echo "\nSum: ".array_sum($array)."\n";

//Получить новый массив только из четных значений
echo "\nEven only: \n";
var_dump(array_filter($array, function ($val) {
  if ($val%2===0) return true;
}));

//Отсортировать исходный массив по убыванию
echo "\nSorted: \n";
rsort($array);
var_dump($array);

//Перевернуть отсортированный исходный массив задом на перед
echo "\nReversed: \n";
var_dump(array_reverse($array));

//Получить массив состоящий только из уникальных значений исходного массива
echo "\nUnique: \n";
var_dump(array_unique($array));

// var_dump($array);
echo "</pre>";
?>
</body>
</html>