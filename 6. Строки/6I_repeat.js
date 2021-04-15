/*
6I.js 25.10.2019
Дана строка, в которой буква h встречается как минимум два раза. 
Повторите последовательность символов, заключенную между первым и последнием появлением буквы h два раза, 
сами буквы h повторять не надо.
Входные данные
Вводится строка.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
In the hole in the ground there lived a hobbit
выходные данные
In the hole in the ground there lived a e hole in the ground there lived a hobbit
*/
var str = 'In the hole in the ground there lived a hobbit';
var pos1 = str.indexOf('h');
var pos2 = str.lastIndexOf('h');
var res1 = str.slice(0,pos1+1);
console.log(res1);
var res2 = str.slice(pos1+1, pos2);
// console.log(res2);
console.log(res1 + res2.repeat(2) + str.slice(pos2));