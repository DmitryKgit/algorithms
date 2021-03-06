/*
7W.js 30.01.2021. 
Элемент последовательности называется локальным максимумом, 
если он строго больше предыдущего и последующего элемента последовательности. 
Первый и последний элемент последовательности не являются локальными максимумами.

Использовать массивы в данной задаче нельзя.

Дана последовательность натуральных чисел, завершающаяся числом 0. 
Определите количество строгих локальных максимумов в этой последовательности.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, 
а служит как признак ее окончания).
1
2
1
2
1
0
Выходные данные
Выведите ответ на задачу.
2

1) Если текущее число больше предыдущего
    Увеличиваем счётчик
2) Если текущее число меньше предыдущего
    Если счётчик > 0, то увеливаем количество максимумов на 1
    Сбрасываем счётчик
3) Выводим количество максимумов
*/


let pre = parseInt(prompt('Введите первое число')); // предыдущее число
let cur = pre;                                      // текущее число
let cnt = 0;
let max = 0;
while (cur != 0) {
    if (cur > pre) {        // последовательность растёт
        cnt++;
    } else {                // последовательность перестала расти
        if (cur < pre && cnt > 0) {          // если максимум
            max++;
        }
        cnt = 0;
    }
    pre = cur;
    cur = parseInt(prompt('Введите число'));
}
console.log(max);

