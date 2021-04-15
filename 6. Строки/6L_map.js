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
   let result = str.split('').map(item => item == 'h' ? item.toUpperCase() : item).join('');
   
   return result.replace(1, "h");
}

let str = 'In the hole in the ground there lived a hobbit';
console.log(processing(str));