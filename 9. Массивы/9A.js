/*
9A.js 27.04.2021
Выведите все элементы списка с четными индексами (то есть A[0], A[2], A[4], ...).

Программа должна быть эффективной и не выполнять лишних действий!

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 4 5
выходные данные
1 3 5 
*/


function evenIndex(arr) {
    return arr.filter((item, index) => index % 2 == 0);
}

// принимает массив, печатает массив на консоль
function arrayPrint(arr) {
    console.log(arr.map(element => String(element)).join(' '));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
    arrayPrint(evenIndex(arrayInput()));    
}

function test() {
    arrayPrint(evenIndex([1, 2, 3, 4, 5]));
}

//interfaceTest();
test();