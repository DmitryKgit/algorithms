/*
9A.js 13.02.2020
Выведите все элементы списка с четными индексами (то есть A[0], A[2], A[4], ...).
Программа должна быть эффективной и не выполнять лишних действий!
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1 2 3 4 5
выходные данные
1 3 5 
*/
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    if (i%2 == 0)
        console.log(arr[i]);
}
console.log(typeof(arr));