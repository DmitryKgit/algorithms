/*
6M.js 01.11.2019
Дана строка. 
Получите новую строку, вставив между двумя символами исходной строки символ *. Выведите полученную строку.
Входные данные
Вводится строка.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
Python
выходные данные
P*y*t*h*o*n

или: var res = str.split('');
console.log(res.join('*'));
*/
var str = 'Python';
console.log(Array.from(str).join('*'));