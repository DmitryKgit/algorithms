/*
9F.js 27.04.2021
Дан список чисел. Определите, сколько в этом списке элементов, которые больше двух своих соседей и выведите количество таких элементов.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 4 5
выходные данные
0
*/

// определяет количество локальных максимумов - возвращает число
function localMax(arr) {
    let cnt = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            cnt++;
        }
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
    arrayPrint(localMax(arrayInput()));    
}

function test() {
    arrayPrint(localMax([1, 2, 3, 4, 5, 6]));
    arrayPrint(localMax([1, 2, 1, 4, 1, 6]));
}

//interfaceTest();
test();

