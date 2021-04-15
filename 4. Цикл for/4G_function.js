/*
4G.js 01.06.2019
По данным целым неотрицательным n и k вычислите значение числа сочетаний из n элементов по k, то есть n!/k!(n−k)!.
C(n, k).

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

// Принимает аргумент n, возвращает n! .
function factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++){
        factorial*=i;
    }   
    return factorial; 
}

let n = 4;
let k = 2;
console.log(factorial(n)/(factorial(k)*factorial(n-k)));