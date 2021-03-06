/*
7D.js 03.01.2021. 
Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, 
или слово NO в противном случае.

Операцией возведения в степень пользоваться нельзя!

Входные данные
Вводится натуральное число.
3       8

Выходные данные
Выведите ответ на задачу.
NO      YES

1) Направление от 1 вверх до N
2) В цикле ans умножаем на 2, пока ans < N
3) Проверяем степень двойки как равенство ans == N
*/

function processing(N) {
    let ans = 1;
    while (ans < N) {
        ans *= 2;
    }
    return N == ans;
}

function interfaceTest() {
    console.log(processing(9) ? "YES" : "NO");
}

interfaceTest();



