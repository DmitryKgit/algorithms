/*
8F.js 15.02.2021. 
Если точка принадлежит области (область включает границы), выведите слово YES, иначе выведите слово NO.

Решение должно содержать функцию IsPointInArea(x, y), возвращающую True, если точка принадлежит области и False, 
если не принадлежит. Основная программа должна считать координаты точки, 
вызвать функцию IsPointInArea и в зависимости от возвращенного значения вывести на экран необходимое сообщение.

Функция IsPointInArea не должна содержать инструкцию if.

Входные данные
Вводится два действительных числа.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
-2
1
выходные данные
NO
входные данные
-2
2
выходные данные
YES

Область:
внутри круга И над наклонной И над другой наклонной ИЛИ 
снаружи круга И под наклонной И под другой наклонной

ПВ:
y >= 2x + 2
(x - xc)^2 + (y - yc)^2 <= r^2
ПН:
y <= -x
(x - xc)^2 + (y - yc)^2 >= r^2
ЛН:
y <= 2x + 2
(x - xc)^2 + (y - yc)^2 >= r^2
ЛВ:
y >= -x
y >= 2x + 2
(x - xc)^2 + (y - yc)^2 <= r^2
*/

// Предикат: лежат ли указанные координаты внутри круга.
function IsPointInCircle(x, y, xc, yc, r) {
    return (x - xc) * (x - xc) + (y - yc) * (y - yc) <= r * r;
}

// Предикат: лежат ли указанные координаты снаружи круга.
function IsPointOutCircle(x, y, xc, yc, r) {
    return (x - xc) * (x - xc) + (y - yc) * (y - yc) >= r * r;
}

// Предикат: лежат ли указанные координаты над линиями
function IsPointOverLine(x, y) {
    return y >= -x && 2 * y >= 2 * x + 2; // y = 0 x = -1    y = 2 x = 0
}

// Предикат: лежат ли указанные координаты под линиями
function IsPointUnderLine(x, y) {
    return y <= -x && y <= 2 * x + 2; // y = 0 x = -1    y = 2 x = 0
}

// Предикат: лежат ли указанные координаты внутри области.
function IsPointInArea(x, y, xc, yc, r) {
    return (IsPointInCircle(x, y, xc, yc, r) && IsPointOverLine(x, y) || 
           IsPointOutCircle(x, y, xc, yc, r) && IsPointUnderLine(x, y));
    // console.log(IsPointInCircle(x, y, xc, yc, r));
    // console.log(IsPointOverLine(x, y));
    // console.log(IsPointOutCircle(x, y, xc, yc, r));
    // console.log(IsPointUnderLine(x, y));
}



function autoTest() {
    console.log(IsPointInArea(-2, 1, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(-2, 2, -1, 1, 2) ? "YES" : "NO"); // YES
    console.log(IsPointInArea(-3, 3, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(1, 2, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(0, 2, -1, 1, 2) ? "YES" : "NO"); // YES
    console.log(IsPointInArea(0, 3, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(2, 1, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(2, 0, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(2, -1, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(2, -2, -1, 1, 2) ? "YES" : "NO"); // YES
    console.log(IsPointInArea(0, 0, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(-1, 0, -1, 1, 2) ? "YES" : "NO"); // NO
    console.log(IsPointInArea(-2, -2, -1, 1, 2) ? "YES" : "NO"); // YES
    console.log(IsPointInArea(-2, -1, -1, 1, 2) ? "YES" : "NO"); // NO 
    console.log(IsPointInArea(-2, 0, -1, 1, 2) ? "YES" : "NO"); // NO 
}

autoTest();



