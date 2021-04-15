/*
3C.js 21.07.2020. 
В математике функция sign(x) (знак числа) определена так:
sign(x) = 1,   если x > 0,
sign(x) = -1, если x < 0,
sign(x) = 0,   если x = 0.

Для данного числа x выведите значение sign(x).

Входные данные
Вводится одно целое число.
3
Выходные данные
Выведите ответ на задачу.
1
*/

let a = 4;
if (a > 0) {
    let sign_a = 1;
    console.log(sign_a);
} else if (a < 0) {
    let sign_a = -1;
    console.log(sign_a);
} else {
    let sign_a = 0;
    console.log(sign_a);
}