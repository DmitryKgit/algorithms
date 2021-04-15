/*
6I.js 08.11.2020. 
Дана строка, в которой буква h встречается как минимум два раза. 
Повторите последовательность символов, заключенную между первым и последнием появлением буквы h два раза, сами буквы h повторять не надо.
Входные данные
Вводится строка.
In the hole in the ground there lived a hobbit
Выходные данные
Выведите ответ на задачу.
In the hole in the ground there lived a e hole in the ground there lived a hobbit
*/

function processing(str) {
   console.log(str.slice(0, str.lastIndexOf('h')) + str.slice(str.indexOf('h') + 1));
}

let str = 'In the hole in the ground there lived a hobbit';
processing(str);