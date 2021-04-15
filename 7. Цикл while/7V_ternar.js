/*
7U.js 29.01.2021. 
Дана последовательность натуральных чисел, завершающаяся число 0. 
Определите наибольшую длину монотонного фрагмента последовательности (то есть такого фрагмента, 
где все элементы либо больше предыдущего, либо меньше).

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, 
а служит как признак ее окончания).
1
7
7
9
1
0
Выходные данные
Выведите ответ на задачу.
2

1) Последовательность продолжается:
    Увеличиваем счётчик
2) Последовательность закончилась:
    Сбрасываем счётчик
3) Сравниваем с максимумом
*/

function processing(input) {
    let pre = next = input;
    let inc = dec = max = 0;
    while (next != 0) {
        inc = next > pre ? inc + 1 : 1; 
        dec = next < pre ? dec + 1 : 1;
        max = max < inc ? inc : max < dec ? dec : max;
        [pre, next] = [next, parseInt(prompt('Введите число'))];
    }
    return max;
}

function interfaceTest() {
    console.log(processing(parseInt(prompt('Введите число'))));
}

interfaceTest();

// function autoTest() {
//     console.log(processing(0)); // 0            0
//     console.log(processing(1)); // 1 || 2       2
//     console.log(processing(2)); // 3            3
//     console.log(processing(8)); // 6            6
//     console.log(processing(6)); // -1          -1
//     console.log(processing(13)); // 7           7
// }

// autoTest();





