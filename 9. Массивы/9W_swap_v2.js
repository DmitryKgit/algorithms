/*
9W.js 11.05.2021
Дан список целых чисел. Требуется “сжать” его, переместив все ненулевые элементы в левую часть списка, не меняя их порядок, а все нули - в правую часть. Порядок ненулевых элементов изменять нельзя, дополнительный список использовать нельзя, задачу нужно выполнить за один проход по списку. Распечатайте полученный список.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
4 0 5 0 3 0 0 5
выходные данные
4 5 3 5 0 0 0 0 
*/

// возвращает массив - ответ на задачу
function compression(arr) {
    let iNull = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == 0 && arr[iNull] != 0) {
            iNull = i;
        } else if (arr[i] != 0 || arr[iNull] != 0) {
            [arr[i], arr[iNull]] = [arr[iNull], arr[i]];
            iNull++;
        } 
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
    arrayPrint(compression(arrayInput()));    
}

function test() {
    arrayPrint(compression([4, 0, 5, 0, 3, 0, 0, 5])); 
    arrayPrint(compression([0, 0, 0, 0, 0, 0, 0, 5])); 
    arrayPrint(compression([0, 5, 5, 5, 5, 5, 5, 5])); 
}

//interfaceTest();
test();




