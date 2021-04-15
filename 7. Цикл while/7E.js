/*
7E.js 03.01.2021. 
По данному натуральному числу N выведите такое наименьшее целое число k, что 2^k≥N.

Операцией возведения в степень пользоваться нельзя!

Входные данные
Вводится натуральное число.
7

Выходные данные
Выведите ответ на задачу.
3
*/

function processing(N) {
    let prod = 1, cnt = 1;
    while (prod < N) {
        prod *= 2;
        cnt++;
    }
    return cnt;
}

function interfaceTest() {
    console.log(processing(7));
}

interfaceTest();



