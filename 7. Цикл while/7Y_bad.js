/*
7Y.js 02.02.2021. 
Дана последовательность натуральных чисел x1, x2, ..., xn. Стандартным отклонением называется величина
σ=Math.sqrt(((x1−s)^2+(x2−s)^2+…+(xn−s)^2)/(n−1))
где s=(x1+x2+…+xn)/n — среднее арифметическое последовательности.

Определите стандартное отклонение для данной последовательности натуральных чисел, завершающейся числом 0.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, 
а служит как признак ее окончания).

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1
7
9
0
выходные данные
4.16333199893
*/

let input = parseInt(prompt('Введите число'));
let sum = 0, cnt = 0, s = 0, result = 0;
while (input != 0) {
    cnt++;
    sum += input;
    s += sum / cnt;      // среднее арифметическое текущее
    result += (input - s) * (input - s);    //  среднее арифметическое итоговое!
    console.log('input: ', input, 'cnt: ', cnt,'sum: ', sum,'s: ', s,'result: ', result);
    input = parseInt(prompt('Введите число'));
}

console.log(Math.sqrt(result / (cnt - 1)));

function interfaceTest() {
    console.log(processing(parseInt(prompt('Введите число'))));
}

function autoTest() {
    console.log(processing(1)); // 0
    console.log(processing(7)); // 1
    console.log(processing(9)); // 3
    console.log(processing(8)); // 6
    console.log(processing(6)); // -1
    console.log(processing(13)); // 7
}

interfaceTest();
// autoTest();