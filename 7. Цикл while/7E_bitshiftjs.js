/*
7E.js 08.01.2021. 
По данному натуральному числу N выведите такое наименьшее целое число k, что 2^k≥N.

Операцией возведения в степень пользоваться нельзя!

Входные данные
Вводится натуральное число.
7

Выходные данные
Выведите ответ на задачу.
3
1) Самое большое число имеет вид 1111
2) Если к нему прибавить 1, то получится степень двойки
*/

function processing(N) {
    console.log(N.toString(2));
    return (N << 1).toString(2);
}

function interfaceTest() {
    console.log(processing(9));
}

interfaceTest();



