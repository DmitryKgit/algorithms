/*
11A.js 01.06.2021
Даны два натуральных числа. Вычислите их наибольший общий делитель при помощи алгоритма Евклида, реализованного без использования рекурсии.

Входные данные
Вводится два натуральных числа.

Выходные данные
Выведите ответ на задачу.
x
Примеры
входные данные
1
1
выходные данные
1
*/

// принимает массив, возвращает массив - ответ на задачу
function MinDivisor(n) {
    if (n % 2 == 0) { // O(1) для чётных n
        return 2;
    }
    let limit = Math.sqrt(n);
    for (let delitel = 3; delitel <= limit; delitel += 2) { // O(sqrt(n)) для нечётных
        if (n % delitel == 0) {
            return delitel;
        }
    }
    return n;
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
    arrayPrint(MinDivisor(...arrayInput()));    
}

function test() {
    arrayPrint(MinDivisor([1, 2, 3, 4, 5], 3)); // 3 4 5 1 2  
    arrayPrint(MinDivisor([1, 2, 3, 4, 5], -3)); // 4 5 1 2 3  
    arrayPrint(MinDivisor([1, 2, 3, 4, 5], 11)); // 4 5 1 2 3  
}

// interfaceTest();
test();






