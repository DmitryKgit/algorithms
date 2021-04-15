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



