/*
8A.js 13.02.2021. 
Даны четыре действительных числа: x1, y1, x2, y2. 
Напишите функцию distance(x1, y1, x2, y2), вычисляющую расстояние между точкой (x1,y1) и (x2,y2).
Считайте четыре действительных числа и выведите результат работы этой функции.

Входные данные
Вводятся четыре действительных числа.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
0
0
1
1
выходные данные
1.41421
*/

function distance(x1, y1, x2, y2) {
    let cat1 = x2 - x1;
    let cat2 = y2 - y1;
    return Math.sqrt(cat1 * cat1 + cat2  * cat2);
}

function interfaceTest() {
    let x1 = parseInt(prompt('Введите x1'));
    let y1 = parseInt(prompt('Введите y1'));
    let x2 = parseInt(prompt('Введите x2'));
    let y2 = parseInt(prompt('Введите y2'));
    console.log(distance(x1, y1, x2, y2));
}

function autoTest() {
    console.log(distance(0, 0, 1, 1)); // 1.41421           
    console.log(distance(0, 0, 1, -1)); //1.41421
    console.log(distance(0, 0, -1, 1)); // 1.41421        
    console.log(distance(0, 0, -1, -1)); // 1.41421      
}

// interfaceTest();
autoTest();


