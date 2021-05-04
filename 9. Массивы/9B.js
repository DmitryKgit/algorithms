/*
9B.js 04.05.2021
Выведите все четные элементы списка.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 2 3 3 3 4
выходные данные
2 2 4 
*/


function evenValue(arr) {
    return arr.filter(item => item % 2 == 0);
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
    arrayPrint(evenValue(arrayInput()));    
}

function test() {
    arrayPrint(evenValue([1, 2, 2, 3, 3, 3, 4]));
}

//interfaceTest();
test();
