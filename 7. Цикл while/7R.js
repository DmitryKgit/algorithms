/*
7R.js 22.01.2021. 
Последовательность Фибоначчи определяется так:
φ0=0,φ1=1,...,φn=φn−1+φn−2.

По данному числу n определите n-е число Фибоначчи φn.

Входные данные
Вводится натуральное число n.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
6
выходные данные
8
*/


function processing(n) {
    let i = 2;
    let n2 = 0; // число Фибоначи для n - 2
    let n1 = 1; // число Фибоначи для n - 1
    let fib = 1;
    while(i <= n) {
        fib = n2 + n1;
        n2 = n1;
        n1 = fib;
        i++;
        // console.log(n2, n1, fib, i);
    }
    return fib;
}

function interfaceTest() {
    console.log(processing(parseInt(prompt('Введите число'))));
}

function autoTest() {
    console.log(processing(0)); // 0
    console.log(processing(1)); // 1
    console.log(processing(2)); // 1
    console.log(processing(7)); // 13
}

// interfaceTest();
autoTest();
