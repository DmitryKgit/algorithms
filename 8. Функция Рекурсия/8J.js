/*
8J.js 01.03.2021
Дано натуральное число x>1. Проверьте, является ли оно простым. Программа должна вывести слово YES, если число простое и NO, если число составное.

Решение оформите в виде функции IsPrime(x), которая возвращает True для простых чисел и False для составных чисел. Решение должно иметь сложность O(−√х).

Входные данные
Вводится натуральное число.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
2
выходные данные
YES
входные данные
4
выходные данные
NO
*/

function IsPrime(x) {
    let limit = Math.sqrt(x);
    let delitel = 2;
    while (delitel <= limit) {
        if (x % delitel == 0) {
            return false;
        }
        delitel++;
    }
    return true;
}

function autoTest() {
    console.log(IsPrime(3) ? "YES" : "NO");
    console.log(IsPrime(4) ? "YES" : "NO");
}

autoTest();