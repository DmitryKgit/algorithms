/*
8H.js 15.01.2020
Даны два натуральных числа n и m. Сократите дробь n/m, то есть выведите два других числа p и q таких, что nm=qp и дробь qp — несократимая.
Решение оформите в виде функции ReduceFraction(n, m), получающая значения n и m и возвращающей кортеж из двух чисел.
Входные данные
Вводятся два натуральных числа.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
12
16
выходные данные
3 4
*/

function gcd(n, m) {
    n = Math.abs(n);
    m = Math.abs(m);
    if (m > n) {var temp = n; n = m; m = temp;}
    while (true) {
        if (m == 0) return n;
        n %= m;
        if (n == 0) return m;
        m %= n;
    }
}

function ReduceFraction(n, m) {
    var divisor = gcd(n, m);
    return n/divisor + ' ' + m/divisor;
}

var n = 13;
var m = 39;
console.log(ReduceFraction(n, m));