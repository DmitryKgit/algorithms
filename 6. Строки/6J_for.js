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
   let result = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i] == '1') {
         result += 'one';
      } else {
         result += str[i];
      }
   }
   console.log(result);
}

let str = '1+1=2';
processing(str);