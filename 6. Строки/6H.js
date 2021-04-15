/*
6H.js 07.11.2020. 
Дана строка, в которой буква h встречается как минимум два раза. 
Разверните последовательность символов, заключенную между первым и последнием появлением буквы h, в противоположном порядке.

Входные данные
Вводится строка.
In the hole in the ground there lived a hobbit
Выходные данные
Выведите ответ на задачу.
In th a devil ereht dnuorg eht ni eloh ehobbit
*/

function processing(str) {
    let first = str.indexOf('h') + 1;
    let last = str.lastIndexOf('h');
    let start = str.slice(0, first);
    let center = str.slice(first, last);
    let end = str.slice(last);
    console.log(start + center.split('').reverse().join('') + end);
}

let str = 'In the hole in the ground there lived a hobbit';
processing(str);

// let a = ['pepsi', 'kola', 'fanta', 'sprite'];
// a.reverse();
// console.log(a);

