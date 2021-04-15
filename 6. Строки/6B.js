/*
6B.js 31.10.2020. 
Дана строка, состоящая из слов, разделенных пробелами. Определите, сколько в ней слов. 
Используйте для решения задачи метод count.

Входные данные
Вводится строка.
Hello world
Выходные данные
Выведите ответ на задачу.
2
test 
` Hello  world! `
*/

function processing(str) {
    let newArray = str.split(" ").filter(i => i);   
    console.log(newArray.length);
}

let str = ' Hello  world ';
processing(str); 