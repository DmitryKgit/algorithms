/*
9W.js 08.06.2021
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

Запоминать положения нулей
Заменять нули ненулевыми элементами
*/

// возвращает массив - ответ на задачу
function compression(arr) {
    let iZero = 0; // индекс левого нуля
    let isZero = false; // существование нуля в массиве 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && isZero === false) {
            leftZero = i;
            isZero = true;
        } 
        if (arr[i] != 0 && isZero) {
            [arr[iZero], arr[i]] = [arr[i], 0];
            iZero++; // убираем один левый нуль
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
    arrayPrint(compression([0, 0, 0, 5, 0, 0, 0, 5])); 
    arrayPrint(compression([0, 5, 5, 5, 5, 5, 5, 5])); 
    arrayPrint(compression([0, 5, 5, 5, 5, 5, 5, 0])); 
}

//interfaceTest();
test();




