/*
7L.js 05s.01.2021. 
Последовательность состоит из натуральных чисел, не превосходящих 10^9, и завершается числом 0. 
Определите значение наибольшего элемента последовательности.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, 
а служит как признак ее окончания).
1
7
9
0
Выходные данные
Выведите ответ на задачу.
9
По памяти O(1)
По времени O(N)
*/

let num = parseInt(prompt('Введите число')); 
let max = num;
while(num != 0) {
    if (num > max) {
        max = num;
    }
    num = parseInt(prompt('Введите число'));
}
console.log(max);




