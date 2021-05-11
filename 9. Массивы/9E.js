/*
9E.js 04.05.2021
Дан список чисел. Если в нем есть два соседних элемента одного знака, выведите эти числа. Если соседних элементов одного знака нет - не выводите ничего. Если таких пар соседей несколько - выведите первую пару.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
-1 2 3 -1 -2
выходные данные
2 3
*/


function sameSign(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] * arr[i + 1] > 0) {
            result.push(arr[i]);
            result.push(arr[i + 1]);
            return result;
        }
    }
}

// принимает массив, печатает массив на консоль
function arrayPrint(arr) {
    if (!arr) {
        return false;
    }
    console.log(arr.map(element => String(element)).join(' '));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
    arrayPrint(sameSign(arrayInput()));    
}

function test() {
    arrayPrint(sameSign([-1, 2, 3, 1, -1, -2]));
    arrayPrint(sameSign([-1, 2, -3, 1, -1, -2]));
    arrayPrint(sameSign([-1, 2, -3, 1, -1, 2]));
    arrayPrint(sameSign([]));
}

//interfaceTest();
test();
