/*
2K.js 10.07.2020. 
Дано целое число n. Выведите следующее за ним четное число.

Задачу необходимо решить целочисленными операциями без использования условных операторов (в том числе без тернарного оператора ?: в С++) и\или циклов.

Входные данные
Вводится целое положительное число, не превышающее 1000.

Примеры
входные данные
7    8
выходные данные
8   10
*/

// Функция возвращает следующее за n чётное число
let n = 126;
const m = Math.ceil((n + 1) / 2) * 2;
console.log(m);
