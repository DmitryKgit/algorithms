/*
8B.js 13.02.2021. 
Напишите функцию min4(a, b, c, d), вычисляющую минимум четырех чисел, которая не содержит инструкции if, 
а использует стандартную функцию min. Считайте четыре целых числа и выведите их минимум.

Входные данные
Вводятся четыре целых числа.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
4
5
6
7
выходные данные
4
*/

function min4(a, b, c, d) {
    return Math.min(a, b, c, d);
}

// function interfaceTest() {
//     let x1 = parseInt(prompt('Введите x1'));
//     let y1 = parseInt(prompt('Введите y1'));
//     let x2 = parseInt(prompt('Введите x2'));
//     let y2 = parseInt(prompt('Введите y2'));
//     console.log(distance(x1, y1, x2, y2));
// }

function autoTest() {
    console.log(min4(0, 0, 1, 1)); // 1          
    console.log(min4(1, 2, 1, -1)); // -1
}

// interfaceTest();
autoTest();


