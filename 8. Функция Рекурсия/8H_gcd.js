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

// НОД - наибольший общий делитель.
function gcd(n, m) {
    var gcd = Math.min(n, m);
    while (!(n%gcd==0 && m%gcd==0)) {
        gcd-=1;
    }
    return gcd;
}

function ReduceFraction(n, m) {
    var divisor = gcd(n, m);
    return n/divisor + ' ' + m/divisor;
}

var n = 12;
var m = 16;
console.log(ReduceFraction(n, m));