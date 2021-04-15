/*
2S.js 16.07.2020. 
Пирожок в столовой стоит a рублей и b копеек. Определите, сколько рублей и копеек нужно заплатить за n пирожков.

Входные данные
Программа получает на вход три числа: a, b, n - целые, положительные, не превышают 10000.
10          2
15          50
2           4
Выходные данные
Программа должна вывести два числа: стоимость покупки в рублях и копейках.
20 30       10 0
*/

let a = 2;      // количество рублей
let b = 50;     // количество копеек
let n = 4;      // количество пирожков
let total = n * (a * 100 + b); 
console.log(Math.trunc(total / 100), total % 100);




