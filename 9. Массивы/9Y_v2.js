/*
9Y.js 12.05.2021
Известно, что на доске 8×8 можно расставить 8 ферзей так, чтобы они не били друг друга. Вам дана расстановка 8 ферзей на доске, определите, есть ли среди них пара бьющих друг друга.

Входные данные
Программа получает на вход восемь пар чисел, каждое число от 1 до 8 - координаты 8 ферзей.

Выходные данные
Если ферзи не бьют друг друга, выведите слово NO, иначе выведите YES.

Примеры
входные данные
1 7
2 4
3 2
4 8
5 6
6 1
7 3
8 5
выходные данные
NO
входные данные
1 8
2 7
3 6
4 5
5 4
6 3
7 2
8 1
выходные данные
YES
*/

// принимает массив координат, возвращает true, если ферзи бьют друг друга, false - если нет.
function queens(location) {
    let len = location.length;
    for (let i = 0; i < len; i++) {   // i - номер 1ого ферзя
        for (let j = i + 1; j < len; j++) { // j - номер 2ого ферзя
            if (isMove(location[i][0], location[i][1], location[j][0], location[j][1]))
                return true;
        }
    }
    return false;
}

// принимает координату ферзя и клетки, возвращает bool - возможность хода
function isMove(x1, y1, x2, y2) {
    let dx = Math.abs(x1 - x2);
    let dy = Math.abs(y1 - y2);
    return (dx != 0 && dx == dy || (dx == 0) != (dy == 0));
}

// принимает массив, печатает массив на консоль
function arrayPrint(ans) {
    console.log(ans ? "YES" : "NO");
}

// принимает координаты ферзей, возвращает массив данных
function arrayInput() {
    const location = new Array(8);
    for (let i = 0; i < 8; i++) {
        location[i] = [prompt('Введите горизонтальную координату'), 
                       prompt('Введите вертикальную координату')];
    }
    return location;
}

function interfaceTest() {
    arrayPrint(queens(arrayInput()));    
}

function test() {
    arrayPrint(queens([
        [1, 8], 
        [2, 7], 
        [3, 6], 
        [4, 5], 
        [5, 4], 
        [6, 3], 
        [7, 2], 
        [8, 1]
    ])); 
    arrayPrint(queens([
        [1, 7], 
        [2, 4], 
        [3, 2], 
        [4, 8], 
        [5, 6], 
        [6, 1], 
        [7, 3], 
        [8, 5]
    ])); 
}

// interfaceTest();
test();






