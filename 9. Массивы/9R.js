/*
9R.js 11.05.2021
Дан список целых чисел, число k и значение C. Необходимо вставить в список на позицию с индексом k элемент, равный C, сдвинув все элементы имевшие индекс не менее k вправо.

Поскольку при этом количество элементов в списке увеличивается, после считывания списка в его конец нужно будет добавить новый элемент, используя метод append().

Вставку необходимо осуществлять уже в считанном списке, не делая этого при выводе и не создавая дополнительного списка.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке. В следующей строке вводятся два целых числа.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
7 6 5 4 3 2 1
2 0
выходные данные
7 6 0 5 4 3 2 1 
*/

// удаляет элемент по индексу - возвращает массив - ответ на задачу
function deleteElem(arr, k, c) {
    arr.splice(k, 0, c);
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
    arrayPrint(deleteElem(arrayInput()));    
}

function test() {
    arrayPrint(deleteElem([7, 6, 5, 4, 3, 2, 1], 2, 0));
    arrayPrint(deleteElem([1, 2, 3, 4, 5], 3, 0));
    arrayPrint(deleteElem([1, 2, 3, 4, 5, 6], 4, 0));
    arrayPrint(deleteElem([2, 1, 3, 4, 5, 7, 6], 0, 0));
}

//interfaceTest();
test();



