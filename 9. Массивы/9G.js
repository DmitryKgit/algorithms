/*
9G.js 04.05.2021
Дан список чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке. Если наибольших элементов несколько, выведите индекс первого из них.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 2 1
выходные данные
3 2
*/


// определяет наибольший элемент массива и его индекс - выводит массив ответов
function max(arr) {
    const maxVal = Math.max(...arr);
    return [maxVal, arr.indexOf(maxVal)];
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
    arrayPrint(max(arrayInput()));    
}

function test() {
    arrayPrint(max([1, 2, 3, 2, 1]));
}

//interfaceTest();
test();

