/*
9M.js 10.05.2021
Переставьте элементы данного списка в обратном порядке, затем выведите элементы полученного списка.

Эта задача отличается от предыдущей тем, что вам нужно изменить значения элементов самого списка, поменяв местами A[0] c A[n-1], A[1] с A[n-2], а затем вывести элементы списка подряд.

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

// разворачивает массив - возвращает массив - ответ на задачу
function rev(arr) {
    let end = Math.trunc(arr.length / 2);
    let len = arr.length;
    for (let i = 0; i <= end; i++) {
      [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
    }
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
    arrayPrint(rev(arrayInput()));    
}

function test() {
    arrayPrint(rev([1, 2, 3, 4, 5]));
    arrayPrint(rev([1, 2, 3, 4, 5, 6]));
}

//interfaceTest();
test();

