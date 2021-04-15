/*
4Y.js 24.09.2020
Дана монотонная последовательность, 
в которой каждое натуральное число k встречается ровно k раз: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
По данному натуральному n выведите первые n членов этой последовательности.
Попробуйте обойтись только одним циклом for.
Входные данные
Вводится натурально число n.
2       5
Выходные данные
Выведите ответ на задачу.
1 2     1 2 2 3 3

i    1   2   3   4   5   6   7   8   9   10
tri  1   3   6   10  15  21  28  36  45  55   
cnt  1   2   2   3   3   3   4   4   4   4
*/

let n = 6, cnt = 1;
for (let i = 0; i < n; i++) {
    if (i == cnt * (cnt + 1) / 2)
        cnt++;
    console.log(cnt);
}