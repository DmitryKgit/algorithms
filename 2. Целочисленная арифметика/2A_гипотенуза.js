/*
2A.js 03.07.2020. 
Дано два числа a и b. Выведите гипотенузу треугольника с заданными катетами.

Входные данные
Вводятся два целых положительных числа, не превышающих 1000.

Выходные данные
Выведите ответ на задачу.
*/

function hypotenuse(a, b) {
    let c = Math.pow(a * a + b * b, 1/2);
    return c;
}
let c = hypotenuse(3, 4); // (Number(prompt('Введите катет №1: ')), Number(prompt('Введите катет №1: ')));
console.log(c);