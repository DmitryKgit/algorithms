/*
8I.js 01.03.2021
Дано натуральное число n>1. Выведите его наименьший делитель, отличный от 1.

Решение оформите в виде функции MinDivisor(n). Алгоритм должен иметь сложность O(sqrt(n)).

Указание. Если у числа n нет делителя не превосходящего sqrt(n), то число n — простое и ответом будет само число n.

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

function autoTest() {
    console.log(MinDivisor(4));
    console.log(MinDivisor(5));
    console.log(MinDivisor(12));
    console.log(MinDivisor(17));
}

autoTest();