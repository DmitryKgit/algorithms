/*
8U.js 22.03.2021
На дорогах Ханоя было введено одностороннее круговое движение, поэтому теперь диск со стержня 1 можно перекладывать только на стержень 2, со стержня 2 на 3, а со стержня 3 на 1.

Решите головоломку с учетом этих ограничений. Вам не нужно находить минимальное решение, но количество совершенных перемещений не должно быть больше 200000, при условии, что количество дисков не превосходит 10.

Входные данные
Вводится натуральное число - количество дисков.

Выходные данные
Выведите ответ на задачу. Башню необходимо переместить со стержня 1 на стержень 3.

Примеры
входные данные
2
выходные данные
1 1 2
1 2 3
2 1 2
1 3 1
2 2 3
1 1 2
1 2 3
*/

function move(n, x, y) {
    let tmp = 6 - x - y;
    if (n == 1) {
        console.log(n, x, tmp);
        console.log(n, tmp, y);
    } else if (n == 2) {
        console.log(n - 1, x, tmp);
        console.log(n - 1, tmp, y);
        console.log(n, x, tmp);
        console.log(n - 1, y, x);
        console.log(n, tmp, y);
        console.log(n - 1, x, tmp);
        console.log(n - 1, tmp, y);
    } else {
        move(n - 1, x, y);
        console.log(n, x, tmp);
        move(n - 1, y, x);
        console.log(n, tmp, y);
        move(n - 1, x, y);
    } 
}

move(3, 1, 3);

// function move(n, x, y) {
//     let cur = x;
//     let next = 6 - cur - y;

//     if (n == 1) {
//         console.log(n, cur, next);
//         [cur, next] = [next, 6 - cur - next];
//         console.log(n, cur, next);
//     } else {
//         move(n - 1, x, y);
//         console.log(n, x, next);
//         move(n - 1, y, next);
//         console.log(n, next, y);
//         move(n - 1, next, y);
//     }
// }

// move(2, 1, 3);

console.log(4%4);   