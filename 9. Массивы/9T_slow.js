/*
9T.js 11.05.2021
Дан список. Выведите те его элементы, которые встречаются в списке только один раз. Элементы нужно выводить в том порядке, в котором они встречаются в списке.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 2 3 3 3
выходные данные
1 
*/

// сравнивает каждый элемент с остальными - возвращает массив - ответ на задачу
function copy(arr) {
    let arrSet = [];
    arr.forEach(item => {
        if (arr.indexOf(item) == arr.lastIndexOf(item)) {
            arrSet.push(item);
        }
    });
    return arrSet;
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



