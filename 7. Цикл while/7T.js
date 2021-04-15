/*
7T.js 26.01.2021. 
Последовательность Фибоначчи определяется так:
φ0=0,φ1=1,...,φn=φn−1+φn−2.

Дано натуральное число A. Определите, каким по счету числом Фибоначчи оно является, то есть выведите такое число n, 
что φn=A.
Если А не является числом Фибоначчи, выведите число -1.

Входные данные
Вводится натуральное число A.
8   6
Выходные данные
Выведите ответ на задачу.
10  -1

*/


function processing(A) {
    if (A == 1) {
        return '1 || 2';
    }
    let n = 0;   // счётчик чисел Фибоначчи
    let f0 = 0;  // нулевое число Фибоначчи
    let f1 = 1;  // первое число Фибоначчи
    while (f1 <= A) {   
        [f0, f1] = [f1, f0 + f1]; // следующее число Фибоначчи
        n++;
        // console.log(n, f0, f1);
    }
    if (f0 == A) { // если А - число Фибоначчи
        return n;
    }
    return -1;  // если А - не число Фибоначчи
}

function interfaceTest() {
    console.log(processing(parseInt(prompt('Введите число'))));
}

function autoTest() {
    console.log(processing(0)); // 0            0
    console.log(processing(1)); // 1 || 2       2
    console.log(processing(2)); // 3            3
    console.log(processing(8)); // 6            6
    console.log(processing(6)); // -1          -1
    console.log(processing(13)); // 7           7
}

interfaceTest();
// autoTest();


