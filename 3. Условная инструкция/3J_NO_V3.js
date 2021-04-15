/*
3J.js 26.07.2020. 
Шахматный король ходит по горизонтали, вертикали и диагонали, но только на 1 клетку. 
Даны две различные клетки шахматной доски, определите, может ли король попасть с первой клетки на вторую одним ходом.

Входные данные
Программа получает на вход четыре числа от 1 до 8 каждое, задающие номер столбца и номер строки сначала для первой клетки, потом для второй клетки.
4
4
5
5
Выходные данные
Программа должна вывести YES, если из первой клетки ходом короля можно попасть во вторую или NO в противном случае.
YES
*/

let x1 = 4;
let y1 = 4;
let x2 = 4;
let y2 = 5;
let dx = Math.abs(x2 - x1); // длина хода по X
let dy = Math.abs(y2 - y1); // длина хода по Y
// король НЕ ходит: более, чем на 1 ИЛИ на 0
console.log((dx > 1 || dy > 1 || (dx == 0 && dy == 0) ? "NO" : "YES");