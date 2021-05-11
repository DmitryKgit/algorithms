/*
9U.js 11.05.2021
Дан список. Посчитайте, сколько в нем различных элементов, не изменяя самого списка.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
3 2 1 2 3
выходные данные
3
*/

// создаёт набор различных элементов - возвращает число - ответ на задачу
function copy(arr) {
    return (new Set(arr)).size;
}

// принимает число, печатает число на консоль
function arrayPrint(num) {
    console.log(String(num));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
    arrayPrint(copy(arrayInput()));    
}

function test() {
    arrayPrint(copy([1, 2, 3, 2, 3])); 
    arrayPrint(copy([1, 1, 1, 1, 1])); 
    arrayPrint(copy([1, 2, 3, 2, 5, 6]));
    arrayPrint(copy([2, 1, 3, 1, 5, 1, 6]));
}

//interfaceTest();
test();




