/*
4G.js 12.08.2020. 
По данным целым неотрицательным n и k вычислите значение числа сочетаний из n элементов по k, то есть n!/(k!(n−k)!).

Входные данные
Вводятся числа n и k.
4
2       
Выходные данные
Выведите ответ на задачу.
6        
*/

let n = 5;
let k = 3;
let factorial_n = 1;
let factorial_k = 1;
let factorial_l = 1;
for (let i = 1; i <= n; i++) {
    factorial_n *= i;
    if (i <= k)
    factorial_k *= i;
    if (i <= n - k)
    factorial_l *= i;
}
let result = factorial_n / (factorial_k * factorial_l);
console.log(factorial_n, factorial_k, factorial_l, result);

