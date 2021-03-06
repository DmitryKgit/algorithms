/*
7U.js 02.03.2021. 
Дана последовательность натуральных чисел, завершающаяся числом 0. 
Определите, какое наибольшее число подряд идущих элементов этой последовательности равны друг другу.

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

Поиск максимума в else.
Проблема для аналогичных задач, не заканчивающихся нулём:
Необходим поиск максимума после цикла - контрольный выстрел т.к.
если последовательность завершается максимальной последовательность
подряд идущих, ответ неверен
*/

function processing(num) {
    let next = num;
    let prev = next;
    let cnt = 0;
    let max = 0;
    while (next != 0) {
        next = parseInt(prompt('Введите число'));
        if (next == prev) {     // последовательность продолжается
            cnt++;
        } else {                // последовательность закончилась
            if (max < cnt) {    // поиск максимума
                max = cnt;
            }            
            cnt = 1;
        }
        prev = next;

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

