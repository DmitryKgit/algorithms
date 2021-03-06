/*
3I.js 22.07.2020. 
Шахматная ладья ходит по горизонтали или вертикали. Даны две различные клетки шахматной доски, определите, 
может ли ладья попасть с первой клетки на вторую одним ходом.

Входные данные
Программа получает на вход четыре числа от 1 до 8 каждое, задающие номер столбца и номер строки сначала для первой клетки, потом для второй клетки.
4
4
5
5
Выходные данные
Программа должна вывести YES, если из первой клетки ходом ладьи можно попасть во вторую или NO в противном случае.
YES
A == (x1 == x2).
B == (y1==y2).
*/

let x1 = 4;
let y1 = 4;
let x2 = 1;
let y2 = 1;
// Шахматная ладья ходит по горизонтали ИЛИ вертикали.
// (x1 != x2 && y1 == y2) || (x1 == x2 && y1 != y2)   // XOR
console.log((x1 == x2) != (y1 == y2) ? "YES" : "NO"); // XOR
// console.log("DEBUG", x1, y1, x2, y2, (x1 != x2), (y1 == y2), (x1 == x2), (y1 != y2));