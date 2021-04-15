/*
8O.js 09.03.2021
Дана последовательность чисел, завершающаяся числом 0. Найдите сумму всех этих чисел, не используя цикл.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, а служит как признак ее окончания).

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1
7
9
0
выходные данные
17
*/

function sum() {
    let n = parseInt(prompt('Введите число'));
    if (n == 0) {
        return n;
    }
    return n + sum();
}

console.log(sum());

function autoTest() {
    console.log(processing(0)); // 0            0
    console.log(processing(1)); // 1 || 2       2
    console.log(processing(2)); // 3            3
    console.log(processing(8)); // 6            6
    console.log(processing(6)); // -1          -1
    console.log(processing(13)); // 7           7
}

// interfaceTest();
// autoTest();
