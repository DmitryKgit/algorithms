/*
5S.js 25.10.2020
По данным натуральным числам n и a вычислите сумму

(a+(2a+...+((n−1)a+(na)^1/2)^1/2)^1/2)^1/2  

Входные данные
Вводятся два натуральных числа.
3
2
Выходные данные
Выведите ответ на задачу.
2.13063
*/

let a = 2;
let sum = 0.0;
let n = 3;

for (let i = n; i > 0; i--) {
    sum = Math.sqrt(sum + i * a);
}
console.log(sum);







