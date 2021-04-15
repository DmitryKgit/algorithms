/*
8H.js 15.02.2021. 
Даны два натуральных числа n и m. Сократите дробь n/m, то есть выведите два других числа p и q таких, что n/m=p/q и дробь p/q — несократимая.

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

1) Делим оба числа на меньшее из них, чтобы получить 2 натуральных числа
2) Продолжаем делить оба числа на уменьшаемое меньшее число в цикле, пока не получим 2 натуральных числа
*/

const n = 12;
const m = 16;
let div = Math.min(n, m); // глобальная переменная

function ReduceFraction(n, m) {
    if (Number.isInteger(n / div) && Number.isInteger(m / div)) { // проверка на натуральность
        return `${n / div} ${m / div}`;
    }
    div--;
    console.log(n, m, div);
    return ReduceFraction(n, m);
}


function interfaceTest() {
    console.log(ReduceFraction(n, m));
}

interfaceTest();




