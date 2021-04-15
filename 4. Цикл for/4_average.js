/*
4M.js 13.08.2020. 
Дано несколько чисел. Подсчитайте, сколько из них равны нулю, и выведите это количество.

Входные данные
Cначала вводится число N, затем вводится ровно N целых чисел.
5
0
7
0
2
2
Выходные данные
Выведите ответ на задачу.
2

среднее арифметическое всех чётных числе
По времени: O(N); По памяти: O(1).
*/

let num = Number(prompt("Введите количество чисел"));
let sum = 0, cnt = 0;
for (let i = 1; i <= num; i++) {
    let number = Number(prompt("Введите число"));
    if (number % 2 == 0) {  // какие числа считаем
        cnt++;
        sum += number;
    }
}
console.log(sum / cnt);


