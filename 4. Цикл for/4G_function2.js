/*
4G.js 01.06.2019
По данным целым неотрицательным n и k вычислите значение числа сочетаний из n элементов по k, то есть n!/k!(n−k)!.

Входные данные
Вводятся числа n и k.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
4
2
выходные данные
6
*/

// Принимает целое, неотрицательное число n и возвращает его факториал.
function factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial*=i;
    }   
    return factorial; 
}

// Принимает целые, неотрицательные числа n и k и возвращает число сочентаний из n по k.
function C(n, k) {
    return Math.trunc(factorial(n)/(factorial(k)*factorial(n-k)));
} 

let n = 4;
let k = 2;
console.log(C(6, 3));