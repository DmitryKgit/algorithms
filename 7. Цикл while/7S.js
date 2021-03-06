/*
7S.js 26.01.2021. 
Исполнитель “Раздвоитель” преобразует натуральные числа. У него есть две команды: “Вычесть 1” и “Разделить на 2”, 
первая команда уменьшает число на 1, вторая команда уменьшает число в два раза, если оно чётное, 
иначе происходит ошибка.

Дано два натуральных числа A и B (A>B). Напишите алгоритм для Развоителя, 
который преобразует число A в число B и при этом содержит минимальное число команд. 
Команды алгоритма нужно выводить по одной в строке, первая команда обозначается, как -1, вторая команда как :2.

Входные данные
Вводятся два натуральных числа A и B.
179
20
Выходные данные
Выведите ответ на задачу.
-1
:2
-1
:2
:2
-1
-1

0) Уменьшаем А в цикле, пока не получим B
1) Проверяем А на чётность и A >= 2*B
    Если А - чётное - делим на 2
    Если А - нечётное - вычитаем 1
2) Печатаем А/2
*/


function processing(A, B) {
    let result = '';
    while (A > B) {
        if (A % 2 == 0 && A >= 2 * B) {
            A /= 2;
            result += `:2\n`;
        } else {
            A--;
            result += `-1\n`;
        }
    }
    return result;
}

function interfaceTest() {
    console.log(processing(179, 20));
}

interfaceTest();


