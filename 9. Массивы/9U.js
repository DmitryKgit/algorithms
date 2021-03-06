/*
9U.js 11.05.2021
Дан список. Посчитайте, сколько в нем различных элементов, не изменяя самого списка.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
3 2 1 2 3
выходные данные
3
*/

// создаёт набор различных элементов - возвращает число - ответ на задачу
function count(arr) {
    let cnt = 0;
    out:
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] == arr[j]) {
                continue out; // пропустить счётчик
            }
        }
        cnt++;
    }
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
    arrayPrint(count(arrayInput()));    
}

function test() {
    arrayPrint(count([1, 2, 3, 2, 3])); 
    arrayPrint(count([1, 1, 1, 1, 1])); 
    arrayPrint(count([1, 2, 3, 2, 5, 6]));
    arrayPrint(count([2, 1, 3, 1, 5, 1, 6]));
}

//interfaceTest();
test();




