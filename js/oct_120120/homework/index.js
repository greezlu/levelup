var moneyAmount,
    fuelCost,
    fuelConsume,
    distance,
    isEnought;

moneyAmount = prompt ("Количество денег");
moneyAmount = +moneyAmount;

fuelCost = prompt ("Стоимость 1л топлива");
fuelCost = +fuelCost;

fuelConsume = prompt ("Расход топлива на 100км (л)");
fuelConsume = +fuelConsume;

distance = prompt ("Необходимоя расстояние (км)");
distance = +distance;

isEnought = (( (distance/100) * fuelConsume) * fuelCost) <= moneyAmount;

alert("Достаточно ли средств? "+isEnought);