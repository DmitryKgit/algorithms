/*
9V.js 11.05.2021
Дан список. Не изменяя его и не используя дополнительные списки, определите, какое число в этом списке встречается чаще всего.

Если таких чисел несколько, выведите любое из них.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 2 3 3
выходные данные
3
*/

// создаёт набор различных элементов - возвращает число - ответ на задачу
function copy(arr) {
    let cnt = 0;
    let maxNum = arr[0];
    let iMax = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                cnt++;
            }
        }
        if (maxNum < cnt) {
            [maxNum, iMax] = [cnt, i];
        }
        cnt = 0;
    }
    return arr[iMax];
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
    arrayPrint(copy(arrayInput()));    
}

function test() {
    arrayPrint(copy([1, 2, 3, 2, 3, 3])); 
    arrayPrint(copy([1, 1, 1, 1, 1])); 
    arrayPrint(copy([1, 2, 3, 2, 5, 6]));
    arrayPrint(copy([2, 1, 3, 1, 5, 1, 6]));
}

//interfaceTest();
test();




