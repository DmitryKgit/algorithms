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

function processing(n) {
    let input = parseInt(prompt('Введите число'));
    let sum = 0, cnt = 0, seq = [];
    while (input != 0) {
        cnt++;
        sum += input;
        seq.push(input);
        console.log(seq);
        input = parseInt(prompt('Введите число'));
    }

    let s = sum / cnt;
    let result = 0;
    for (let item of seq) {
        result += (item - s) * (item - s);
    }
    return Math.sqrt(result / (cnt - 1));
}

function interfaceTest() {
    console.log(processing(parseInt(prompt('Введите число'))));
}

// function autoTest() {
//     console.log(processing(0)); // 0            0
//     console.log(processing(1)); // 1 || 2       2
//     console.log(processing(2)); // 3            3
//     console.log(processing(8)); // 6            6
//     console.log(processing(6)); // -1          -1
//     console.log(processing(13)); // 7           7
// }

interfaceTest();
// autoTest();