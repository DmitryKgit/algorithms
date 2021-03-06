/*
9I.js 13.02.2020
Выведите значение наименьшего нечетного элемента списка, а если в списке нет нечетных элементов - выведите число 0.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
0 1 2 3 4
выходные данные
1
входные данные
2 4 6 8 10
выходные данные
0
Эффективно решение без индекса - через значение.
*/

// var arrNum = '2 3 6 7 10'.split(' ').map(Number)
var arrNum = [2, 3, 6, 8, 10, 1];
var minOdd = 0; // Чтобы отличать ситуацию НЕ инициализированного значения.
for (let elem of arrNum) {
    if ((minOdd == 0 || elem<minOdd) && elem%2 == 1) // инициализация или поиск минимума
        minOdd = elem;
}
console.log(minOdd);