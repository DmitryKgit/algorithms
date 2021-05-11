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
    if (n != 0) {
        if (x == 1) {
            move(n, x, 2);
            move(n, 2, y);
        } else if (x == 3) {
            move(n, x, 1);
        } else {
            let tmp = 6 - x - y;
            move(n - 1, x, tmp);
            console.log(n, x, y);
            move(n - 1, tmp, y);
        }
    }
}

move(3, 1, 3);
