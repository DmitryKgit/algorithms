/*
6G.js 07.11.2020. 
Дана строка, в которой буква h встречается минимум два раза. 
Удалите из этой строки первое и последнее вхождение буквы h, а также все символы, находящиеся между ними.

Входные данные
Вводится строка.
In the hole in the ground there lived a hobbit
Выходные данные
Выведите ответ на задачу.
In tobbit
*/

function processing(str, char) {
    return str.slice(0, str.indexOf(char)) + str.slice(str.lastIndexOf(char) + 1, str.length);
}

let str = 'In the hole in the ground there lived a hobbit';
console.log(processing(str, 'h'));