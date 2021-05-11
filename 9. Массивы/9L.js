/*
9L.js 10.05.2021
Выведите элементы данного списка в обратном порядке, не изменяя сам список.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 4 5
выходные данные
5 4 3 2 1 
*/


// создаёт копию массива и разворачивает ёё - возвращает массив - ответ на задачу
function rev(arr) {
    return JSON.parse(JSON.stringify(arr)).reverse();   // глубокая копия массива
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
    arrayPrint(rev(arrayInput()));    
}

function test() {
    arrayPrint(rev([1, 2, 3, 4, 5]));
}

//interfaceTest();
test();
