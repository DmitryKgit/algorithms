/*
3N.js 01.08.2020. 
Заданы две клетки шахматной доски. Если они покрашены в один цвет, то выведите слово YES, а если в разные цвета – то NO.

Входные данные
Вводятся 4 числа - координаты клеток.
1           1
1           1
2           2
2           3
Выходные данные
Выведите ответ на задачу.
YES         NO
A == (dx == 0)
B == (dy == 0)
A && B || !A && !B  A === B
*/

let x1 = 2;
let y1 = 3;
let x2 = 7;
let y2 = 8;
let dx = Math.abs(x2 - x1) % 2;
let dy = Math.abs(y2 - y1) % 2;
// A && B || !A && !B // эквиваленция
// console.log((((x2 - x1) % 2) == 0 && ((y2 - y1) % 2) == 0) || (((x2 - x1) % 2) != 0 && ((y2 - y1) % 2) != 0) ? "YES" : "NO");
// console.log(dx == 0 && dy == 0 || dx != 0 && dy != 0 ? "YES" : "NO");

console.log((dx == 0) === (dy == 0) ? "YES" : "NO");

