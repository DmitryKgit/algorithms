/*
6L.js 08.11.2020. 
Дана строка. Замение в этой строке все появления буквы h на букву H, кроме первого и последнего вхождения.

Входные данные
Вводится строка.
In the hole in the ground there lived a hobbit

Выходные данные
Выведите ответ на задачу.
In the Hole in tHe ground tHere lived a hobbit
*/

function processing(str) {
   let first = str.indexOf('h');
   let last = str.lastIndexOf('h');
   let start = str.slice(0, first + 1);
   let center = (str.slice(first + 1, last)).split('h').join('H');
   let end = str.slice(last);
   return start + center + end;
}

let str = 'In the hole in the ground there lived a hobbit';
console.log(processing(str));