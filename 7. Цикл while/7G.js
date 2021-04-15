/*
7G.js 04.01.2021. 
Вклад в банке составляет x рублей. Ежегодно он увеличивается на p процентов, после чего дробная часть копеек отбрасывается. 
Определите, через сколько лет вклад составит не менее y рублей.

Входные данные
Программа получает на вход три натуральных числа: x, p, y.
100
10
200

Выходные данные
Программа должна вывести одно целое число.
8
*/

function processing(x, y, p) {
    x = x * 100;    // рубли в копейки
    y = y * 100;    // рубли в копейки
    let cnt = 0;      // время вклада в годах
    while (x < y) {
        x += Math.trunc(x * p / 100); // увеличеваем вклад и отбрасываем дробную часть копеек
        cnt++;
    } 
    return cnt;
}

function interfaceTest() {
    let x = 100;
    let y = 100;
    let p = 10;
    console.log(processing(x, y, p));
}

interfaceTest();



