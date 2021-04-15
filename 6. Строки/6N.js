/*
6N.js 08.11.2020. 
Дана строка. Удалите из нее все символы, чьи индексы делятся на 3.

Символы строки нумеруются, начиная с нуля.

Входные данные
Вводится строка.
Python

Выходные данные
Выведите ответ на задачу.
yton
*/

function processing(str) {
   return str.split('').filter(function(item, index) {
      return (index % 3 != 0);  // убрать все значения строки с индексами, кратными 3
   }).join('');
}

let str = 'Python';
console.log(processing(str));