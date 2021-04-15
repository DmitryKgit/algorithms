/*
2O.js 10.07.2020. 
Электронные часы показывают время в формате h:mm:ss, то есть сначала записывается количество часов в диапазоне от 0 до 23, потом обязательно двузначное количество минут, затем обязательно двузначное количество секунд. Количество минут и секунд при необходимости дополняются до двузначного числа нулями.

С начала некоторых суток прошло n секунд. Выведите, что покажут часы. Задачу необходимо решить без использования условных операторов (в том числе без тернарного оператора ?: в С++) и\или циклов.

Входные данные
Вводится число n - целое, положительное, не превышает 107.

Выходные данные
Выведите показания часов, соблюдая формат.

входные данные
3602            129700
выходные данные
1:00:02         12:01:40
*/

// Программа выводит количество часов, минут и секунд, прошедших с начала суток за n секунд
const n = 129700;

const minute = 60;
const hour = 60 * minute;
const hourLimit = 24;
const hours = Math.trunc(n / hour) % hourLimit;
const minutes = Math.trunc(n % hour / minute);
const seconds = n % hour % minute;

console.log(hours + ":" + String((minutes / 100).toFixed(2)).slice(-2) + ":" + String((seconds / 100).toFixed(2)).slice(-2));


// const n = 3602;
// const minute = 60;
// const hour = 60 * minute;
// const hourLimit = 24;

// const hours = String(Math.trunc(n / hour) % hourLimit);
// let min = String(((Math.trunc(n % hour / minute)) / 100).toFixed(2));
// const minutes = min.slice(min.length - 2, min.length);
// let sec = String((n % hour % minute / 100).toFixed(2));
// const seconds = sec.slice(sec.length - 2, sec.length);
// console.log(hours + ":" + minutes + ":" + seconds);

