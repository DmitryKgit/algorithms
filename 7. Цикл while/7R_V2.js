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
    let f0 = 0; // число Фибоначи для n = 0
    let f1 = 1; // число Фибоначи для n = 1
    while(n-- > 0) {    // проверяет старое n, потом уменьшает его
        [f0, f1] = [f1, f1 + f0];
        // console.log(f0, f1, n);
    }
    return f0;
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
