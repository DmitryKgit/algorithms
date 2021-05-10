/*
9K.js 28.04.2021
Дан список, упорядоченный по неубыванию элементов в нем. Определите, сколько в нем различных элементов.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 2 3 3 3
выходные данные
3
*/

// определяет количество различных элементов - возвращает число - ответ на задачу
function elements(arr) {
    return new Set(arr).size;
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
    arrayPrint(elements(arrayInput()));    
}

function test() {
    arrayPrint(elements([1, 2, 2, 3, 3, 3, 10]));
}

//interfaceTest();
test();