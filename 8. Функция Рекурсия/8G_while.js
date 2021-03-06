/*
8G.js 15.02.2021. 
Дано действительное положительное число a и целоe число n.

Вычислите an. Решение оформите в виде функции power(a, n).

Стандартной функцией или операцией возведения в степень пользоваться нельзя.

Входные данные
Вводится действительное положительное число a и целоe число n.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
2
1
выходные данные
2
входные данные
2
2
выходные данные
4
*/

function power(a, n) {
    let prod = 1;
    let step = 0;
    if (n > 0) {
        step = -1;
    } else {
        step = 1;
        a = 1 / a;
    }
    while (n != 0) {
        prod *= a;
        n += step;
    }
    return prod;
}

function autoTest() {
    console.log(power(2, 7));
    console.log(power(2, 0));
    console.log(power(2, -2));
    console.log(power(25, -1));
}

autoTest();



