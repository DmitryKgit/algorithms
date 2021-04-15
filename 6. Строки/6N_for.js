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
   let result = '';
   for (let i = 0; i < str.length; i++) {
      if (i % 3 != 0)
      result += str[i];
   }
   console.log(result);
}

let str = 'Python';
processing(str);