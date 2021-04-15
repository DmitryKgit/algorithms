/*
6G.js 25.10.2019
Дана строка, в которой буква h встречается минимум два раза. 
Удалите из этой строки первое и последнее вхождение буквы h, а также все символы, находящиеся между ними.
Входные данные
Вводится строка.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
In the hole in the ground there lived a hobbit
выходные данные
In tobbit
*/
var str = 'In the hole in the ground there lived a hobbit';
var pos1 = str.indexOf('h');
var pos2 = str.lastIndexOf('h');
var res1 = str.slice(0, pos1);
var res2 = str.slice(pos2+1);
console.log(res1 + res2);
