/*
7L.js 15.11.2019
Последовательность состоит из натуральных чисел, не превосходящих 10**9, и завершается числом 0. 
Определите значение наибольшего элемента последовательности.
Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 
(само число 0 в последовательность не входит, а служит как признак ее окончания).
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1
7
9
0
выходные данные
9
По памяти O(N)
По времени O(N^2)
*/

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

var arr = [];
while (n != 0) {
    var n = parseInt(prompt());
    arr.push(n); // O(N) по времени
}
console.log(getMaxOfArray(arr));