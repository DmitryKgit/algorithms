/*
8I.js 01.03.2021
Дано натуральное число n>1. Выведите его наименьший делитель, отличный от 1.

Решение оформите в виде функции MinDivisor(n). Алгоритм должен иметь сложность O(n−−√).

Указание. Если у числа n нет делителя не превосходящего n−−√, то число n — простое и ответом будет само число n.

Входные данные
Вводится натуральное число.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
4
выходные данные
2
входные данные
5
выходные данные
5
*/

function MinDivisor(n) {
    if (n % 2 == 0) {
        return 2;
    }
    let limit = Math.sqrt(n);
    let delitel = 3;
    while (delitel <= limit) {
        if (n % delitel == 0) {
            return delitel;
        }
        delitel++;
    }
    return n;
}

function autoTest() {
    console.log(MinDivisor(4));
    console.log(MinDivisor(5));
}

autoTest();