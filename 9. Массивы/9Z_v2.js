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

*/

// принимает массив, возвращает массив - ответ на задачу
function carousel(location, K) {
    K %= location.length;
    return K >= 0 ? location.splice(-K, K).concat(location): 
                    location.concat(location.splice(0, -K));
}

// принимает массив, печатает массив на консоль
function arrayPrint(arr) {
    console.log(arr.map(element => String(element)).join(' '));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return [prompt('Введите числа через пробел').split(' ').map(item => Number(item)), prompt('Введите величину сдвига')];
}

function interfaceTest() {
    arrayPrint(carousel(...arrayInput()));    
}

function test() {
    arrayPrint(carousel([1, 2, 3, 4, 5], 3)); // 3 4 5 1 2  
    arrayPrint(carousel([1, 2, 3, 4, 5], -3)); // 4 5 1 2 3  
    arrayPrint(carousel([1, 2, 3, 4, 5], 12)); // 4 5 1 2 3  
    arrayPrint(carousel([1, 2, 3, 4, 5], 12)); // 4 5 1 2 3  
    arrayPrint(carousel([1, 2, 3, 4, 5], 5)); // 4 5 1 2 3  
}

// interfaceTest();
test();






