/*
2I.js 08.07.2020. 
Дано натуральное число. Найдите число десятков в его десятичной записи.

Входные данные
Вводится единственное число (гарантируется, что число не превышает 106).

Выходные данные
Выведите ответ на задачу.
*/

let a = 3; // Number(prompt('Введите число: '));
a = Math.trunc(a % 100 / 10); 
console.log(a);
