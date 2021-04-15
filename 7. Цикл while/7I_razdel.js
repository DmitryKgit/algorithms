/*
7I.js 05s.01.2021. 
Определите сумму всех элементов последовательности, завершающейся числом 0.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 
(само число 0 в последовательность не входит, а служит как признак ее окончания).
1
7
9
0
Выходные данные
Выведите ответ на задачу.
17
*/

let num = parseInt(prompt('Число'));
let sum = 0;
while(num != 0) {
    sum += num;
    num = parseInt(prompt('Следующее число'));
}
console.log(sum);









