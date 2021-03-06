/*
3K.js 26.07.2020. 
Шахматный слон ходит по диагонали. Даны две различные клетки шахматной доски, определите, 
может ли слон попасть с первой клетки на вторую одним ходом.

Входные данные
Программа получает на вход четыре числа от 1 до 8 каждое, задающие номер столбца и номер строки сначала для первой клетки, потом для второй клетки.
4           4
4           4
5           5
5           4
Выходные данные
Программа должна вывести YES, если из первой клетки ходом слона можно попасть во вторую или NO в противном случае.
YES         NO
*/

let x1 = 4;
let y1 = 4;
let x2 = 1;
let y2 = 7;
let dx = Math.abs(x2 - x1);
let dy = Math.abs(y2 - y1);
/*console.log(c < x1 && d == y1 + (x1 - c) || c < x1 && d == y1 - (x1 - c) || c > x1 && d == y1 + (c - x1) || c > x1 && d == y1 - (c - x1) ? "YES" : "NO"); 
                (x1 && C) || (x1 && D) || (y1 && C) || (y1 && D) =
                        распределительный закон
                = x1 && (y1 || C) || y1 && (C || D) = (x1 || y1) && (C || D) */
//console.log((c < x1 || c > x1) && (d == y1 + (x1 - c) || d == y1 + (c - x1)) ? "YES" : "NO");
console.log(dx != 0 && dy == dx ? "YES" : "NO");