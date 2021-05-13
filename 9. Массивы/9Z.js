/*
9Z.js 13.05.2021
Дан список из N (1≤N≤100000) целых чисел и число K (|K|<100000). Циклически сдвиньте список на |K| элементов вправо, если K – положительное и влево, если отрицательное число.

Входные данные
Программа получает на вход список целых чисел, затем число K.

Выходные данные
Решение должно иметь сложность O(N), то есть не должно зависеть от K.

Дополнительным списком пользоваться нельзя.
Примеры
входные данные
5 3 7 4 6
3
выходные данные
7 4 6 5 3

1) Создаём пустой массив индексов
2) Меняем сдвигаем индексы в пустом массиве
3) Заполняем пустой массив значениями из исходного
*/

// принимает массив, возвращает массив - ответ на задачу
function queens(location, K = 3) {
    let iShift = K >= 0 ? K - location.length * Math.trunc(K / location.length) : location.length + K % location.length; 
    for (let i = 0; i < location.length; i++) {
        location[i] = location[iShift + i];
    }
    console.log(K - location.length * Math.trunc(K / location.length));
    return location;
}
console.log(queens([1, 2, 3, 4, 5]));

// принимает массив, печатает массив на консоль
function arrayPrint(arr) {
    console.log(arr.map(element => String(element)).join(' '));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
    arrayPrint(queens(arrayInput()));    
}

function test() {
    arrayPrint(queens([1, 2, 3, 4, 5], 3)); // 3 4 5 1 2  
    arrayPrint(queens([1, 2, 3, 4, 5], -3)); // 4 5 1 2 3  
}

// interfaceTest();
test();






