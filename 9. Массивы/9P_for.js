/*
9P.js 11.05.2021
В списке все элементы различны. Поменяйте местами минимальный и максимальный элемент этого списка.

Входные данные
Вводится список целых чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
3 4 5 2 1
выходные данные
3 4 1 2 5 
*/

// находит min и max, меняет местами - возвращает массив - ответ на задачу
function replacement(arr) {
    let iMax = 0;
    let iMin = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[iMax] < arr[i]) {
            iMax = i;
        }
        if (arr[iMin] > arr[i]) {
            iMin = i;
        }
    }
    [arr[iMax], arr[iMin]] = [arr[iMin], arr[iMax]];
    return arr;
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
    arrayPrint(replacement(arrayInput()));    
}

function test() {
    arrayPrint(replacement([1, 2, 3, 4, 5]));
    arrayPrint(replacement([1, 2, 3, 4, 5]));
    arrayPrint(replacement([1, 2, 3, 4, 5, 6]));
    arrayPrint(replacement([2, 1, 3, 4, 5, 7, 6]));
}

//interfaceTest();
test();



