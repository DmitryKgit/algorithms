/*
7O.js 18.01.2021. 
Последовательность состоит из натуральных чисел и завершается числом 0. 
Определите значение второго по величине элемента в этой последовательности, то есть элемента, который будет наибольшим, 
если из последовательности удалить наибольший элемент.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, 
а служит как признак ее окончания).
1
7
9
0
Выходные данные
Выведите ответ на задачу.
7

Предполагаем, что значение второго максимума может быть равным значению первого максимума. 
Тест:
входные данные
1
7
7
9
9
0
выходные данные
9

Этот код работает для 7N и для 7O - т.е. ищет 2ой по величине максимум в любых случаях.
*/

let num = 1;
let max1 = 0;
let max2 = 0;
while(num != 0) {
    num = parseInt(prompt('Введите число'));
    if (num > max1) { // num - первый максимум
        max2 = max1; // алгоритм перехода
        max1 = num;
    } else if (num > max2) {
        max2 = num;
    }
    console.log(max1, max2, num);
}
//console.log(max2);
console.log(max2>0 ? ""+max2 : "No");




