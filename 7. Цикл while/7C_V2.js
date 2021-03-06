/*
7C.js 03.01.2021. 
По данному числу N распечатайте все целые степени двойки, не превосходящие N, в порядке возрастания.

Операцией возведения в степень пользоваться нельзя!

Входные данные
Вводится натуральное число.
50

Выходные данные
Выведите ответ на задачу.
1 2 4 8 16 32 

1) Умножаем на 2
2) Проверяем, что не превысили N
3) Печатаем
*/

function processing(N) {
    let i = 1, str = '';
    if (N < 1) {
        return str; 
    }
    do {
        str += i + ' ';
        i *= 2;
    } while (i <= N / 2);   
    return str;
}

function interfaceTest() {
    console.log(processing(0));
}

interfaceTest();



