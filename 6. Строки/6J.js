/*
6J.js 08.11.2020. 
Дана строка. Замените в этой строке все цифры 1 на слово one.

Входные данные
Вводится строка.
1+1=2

Выходные данные
Выведите ответ на задачу.
one+one=2
*/

function processing(str) {
   let result = str.split('').map(item => item == '1' ? 'one' : item);
   console.log(result.join(''));
}

let str = '1+1=2';
processing(str);