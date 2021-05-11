/*
9C.js 04.04.2021
Найдите количество положительных (>0) элементов в данном списке.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 -2 3 -4 5
выходные данные
3
*/


function posElem(arr) {
    let cnt = 0;
    arr.forEach(element => {
        if (element > 0) {
           cnt++;
        }
    });
    return cnt;
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
    arrayPrint(posElem(arrayInput()));    
}

function test() {
    arrayPrint(posElem([1, -2, 3, -4, 5]));
}

//interfaceTest();
test();