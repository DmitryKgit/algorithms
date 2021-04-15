/*
7A.js 03.01.2021. 
По данному целому числу N распечатайте все квадраты натуральных чисел, не превосходящие N, в порядке возрастания.

Входные данные
Вводится натуральное число.
50

Выходные данные
Выведите ответ на задачу.
1 4 9 16 25 36 49 
*/

function processing(N) {
    let i = 1, result = '';
    while (i * i <= N) {
        result += i * i++ + ' ';
    }
    return result;
}

function interfaceTest() {
    console.log(processing(50));
}

interfaceTest();



