/*
9D.js 04.04.2021
Дан список чисел. Выведите все элементы списка, которые больше предыдущего элемента.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 5 2 4 3
выходные данные
5 4 
*/

// сравнивает элемент с предыдущим - выводит ответ на задачу
function moreThanPrev(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {  // цикл for для возможности начать перебор с 1 индекса
        if (arr[i] > arr[i - 1]) {
            result.push(arr[i])
        }
    }
    return result;
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
    arrayPrint(moreThanPrev(arrayInput()));    
}

function test() {
    arrayPrint(moreThanPrev([1, 5, 2, 4, 3]));
}

//interfaceTest();
test();
