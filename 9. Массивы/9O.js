/*
9O.js 11.05.2021
Циклически сдвиньте элементы списка вправо (A[0] переходит на место A[1], A[1] на место A[2], ..., последний элемент переходит на место A[0]).

Используйте минимально возможное количество операций присваивания.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 4 5
выходные данные
5 1 2 3 4 
*/

// сдвигает массив вправо на 1 элемент - возвращает массив - ответ на задачу
function cyclicShift(arr) {
    return arr.slice(arr.length - 1).concat(arr.splice(0, arr.length - 1));
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
    arrayPrint(cyclicShift(arrayInput()));    
}

function test() {
    arrayPrint(cyclicShift([1, 2, 3, 4]));
    arrayPrint(cyclicShift([1, 2, 3, 4, 5]));
    arrayPrint(cyclicShift([1, 2, 3, 4, 5, 6]));
    arrayPrint(cyclicShift([1, 2, 3, 4, 5, 6, 7]));
}

//interfaceTest();
test();

