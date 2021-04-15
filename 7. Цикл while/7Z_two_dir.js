/*
7Z.js 04.02.2021. 
У исполнителя “Водолей” есть два сосуда, первый объемом A литров, второй объемом B литров, 
а также кран с водой. Водолей может выполнять следующие операции:

Наполнить сосуд A (обозначается >A).
Наполнить сосуд B (обозначается >B).
Вылить воду из сосуда A (обозначается A>).
Вылить воду из сосуда B (обозначается B>).
Перелить воду из сосуда A в сосуд B (обозначается как A>B).
Перелить воду из сосуда B в сосуд A (обозначается как B>A).
Команда переливания из одного сосуда в другой приводят к тому, что либо первый сосуд полностью опустошается, 
либо второй сосуд полностью наполняется.

Входные данные
Программа получает на вход три натуральных числа A, B, N, не превосходящих 10^4.

Выходные данные
Необходимо вывести алгоритм действий Водолея, который позволяет получить в точности N литров в одном из сосудов, 
если же такого алгоритма не существует, то программа должна вывести текст Impossible.

Количество операций в алгоритме не должно превышать 10^5. Гарантируется, что если задача имеет решение, 
то есть решение, которое содержит не более, чем 10^5 операций.

Тесты к этой задаче закрытые.

Примеры
входные данные
3
5
1
выходные данные
>A
A>B
>A
A>B
входные данные
3
5
6
выходные данные
Impossible

Алгоритм двунаправленный (переливает сначала из меньшего сосуда в больший, или если это невозможно, то переливает из большего в меньший).
Сначала проходим проверки частных случаев:
    1) isLess: Если A < N && B < N, то возвращаем Impossible
    2) isEven: Если A и B чётные, а N нечётное, то возвращаем Impossible
    3) isMultiple: Если объём большего сосуда кратнен объёму меньшего сосуда, а N не кратен, возвращаем Impossible
    4) isLucky: Объём одного из сосудов оказался N, возвращаем >A либо >B
Перед выполнением выясняем, какой сосуд больше.
Выполняем алгоритм fromMinToMax и печатаем результат. 
Если fromMinToMax не работает, то выполняем алгоритм fromMaxToMin и печатаем результат.
Если оба алгоритма не сраотали, то печатаем Impossible.
Перед печатью подставляем соответственные значения A и B.
*/

// объём обоих сосудов меньше N
function isLess(A, B, N) {
    return A < N && B < N;
}

// в сосудах чётное количество воды, а N - нечётное
function isEven(A, B, N) {
    return A % 2 == 0 && B % 2 == 0 && N % 2 != 0;
}

// объём большего сосуда кратнен объёму меньшего сосуда, а N не кратен
function isMultiple(A, B, N) {
    return A % B == 0 && N % B != 0 || B % A == 0 && N % A != 0;
}

// объём одного из сосудов равен N
function isLucky(A, B, N) {
    return A == N ? '>A' : B == N ? '>B' : false;
}

// возвращает количество операций, всегда переливая из меньшего в больший
function fromMinToMax(Vmax, Vmin, N) {
    let max = min = 0;  // текущее количество воды в большем и меньшем сосуде
    let limit = 100000;     
    while (limit > 0) { // ограничение количества операций
        min = Vmin;
        limit--;
        if (max + min > Vmax) {         // объём жидкости в меньшем сосуде больше свободного объёма в большем сосуде
            min += max - Vmax; // оставшийся в меньшем сосуде объём воды
            limit--;
            if (min == N) { // оставшийся в меньшем сосуде объём воды оказался равен N, нужна ли проверка при условии существования второго алгоритма??
                return limit;
            }
            max = 0;
            limit--;
        }
        max += min;
        limit--;
        if (max == N) {
            return limit;
        }
    }
    return limit;
}

// возвращает количество операций, всегда переливая из большего в меньший
function fromMaxToMin(Vmax, Vmin, N) {
    let max = Vmax;  // текущее количество воды в большем сосуде
    let min = 0;   //  текущее количество воды в меньшем сосуде
    let limit = 100000 - 1;     
    while (limit > 0) { // ограничение количества операций
        max += min - Vmin;
        limit--;
        if (max == N) {     // в большем сосуде N
            return limit;
        }
        if (max < Vmin) {    // воды в большем сосуде стало меньше объёма меньшего сосуда
            min = max;
            limit--;
            max = Vmax;
            limit--;
        }
        min = 0;
        limit--;
    }
    return limit;
}



//аналог fromMinToMax() из 7Z_one_dir выводит из меньшего в больший
function fromMinToMax(Vmax, Vmin, N) {
    let max = 0;  // текущее количество воды в большем сосуде
    let min = 0;   //  текущее количество воды в меньшем сосуде
    let result = '';     
    let limit = 100000;     
    while (limit > 0) { // ограничение количества операций
        result += `>Vmin\n`;
        min = Vmin;
        limit--;
        if (max + min > Vmax) {         // объём жидкости в меньшем сосуде больше свободного объёма в большем сосуде
            result += `Vmin>Vmax\n`;
            min = max + min - Vmax; // оставшийся в меньшем сосуде объём воды
            limit--;
            if (min == N) { // оставшийся в меньшем сосуде объём воды оказался равен N, нужна ли проверка при условии существования второго алгоритма??
                return result;
            }
            result += `Vmax>\n`;
            max = 0;
            limit--;
        }
        result += `Vmin>Vmax\n`;
        max = max + min;
        limit--;
        if (max == N) {
            return result;
        }
    //console.log(limit);
    }
    return false;
}
//console.log(fromMinToMax(10, 1, 9));

// выводит алгоритм из большего в меньший
// function fromMaxToMin(Vmax, Vmin, N) {
//     let max = Vmax;  // текущее количество воды в большем сосуде
//     let min = 0;   //  текущее количество воды в меньшем сосуде
//     let result = '>Vmax\n';  
//     let limit = 100000 - 1;     
//     while (limit > 0) { // ограничение количества операций
//         if (max < Vmin) {    // воды в большем сосуде стало меньше объёма меньшего сосуда
//             result += `Vmax>Vmin\n`;
//             min = max;
//             limit--;

//             result += `>Vmax\n`;
//             max = Vmax;
//             limit--;
//         }
//         result += `Vmax>Vmin\n`;
//         max = max - Vmin + min;
//         limit--;
//         if (max == N) {     // в большем сосуде N
//             return result;
//         }
//         result += `Vmin>\n`;
//         min = 0;
//         limit--;
//     }
//     return false;
// }

function aquarius(A, B, N) {
    if (isLess(A, B, N) || isEven(A, B, N) || isMultiple(A, B, N)) {
        return 'Impossible';
    }
    if (isLucky(A, B, N)) {
        return isLucky(A, B, N)
    }
    if (A > B) {
        return {
            fromMinToMax : fromMinToMax(A, B, N),
            fromMaxToMin : fromMaxToMin(A, B, N),
        };
    } else {
        return {
            fromMinToMax : fromMinToMax(B, A, N),
            fromMaxToMin : fromMaxToMin(B, A, N),
        };
    }
    // если fromMinToMax сработал, то выводим его, иначе если сработал fromMaxToMin, то выводим его, иначе выводим Impossible
    // if (A > B) {  
    //     return fromMinToMax(A, B, N) ? fromMinToMax(A, B, N).replace(/Vmax/g, 'A').replace(/Vmin/g, 'B') :
    //            fromMaxToMin(A, B, N) ? fromMaxToMin(A, B, N).replace(/Vmax/g, 'A').replace(/Vmin/g, 'B') : 'Impossible';
    // } else {
    //     return fromMinToMax(B, A, N) ? fromMinToMax(B, A, N).replace(/Vmax/g, 'B').replace(/Vmin/g, 'A') :
    //            fromMaxToMin(B, A, N) ? fromMaxToMin(B, A, N).replace(/Vmax/g, 'B').replace(/Vmin/g, 'A') : 'Impossible';
    // }
}

function autoTest() {
    //console.log(aquarius(3, 5, 6)); // Impossible
    console.log(aquarius(100000, 1, 99999)); // >A; A>B
    // console.log(aquarius(1000000, 1, 50001)); // Impossible
    // console.log(aquarius(1000000, 1, 50000)); // Possible
    // console.log(aquarius(10, 2, 3)); // Impossible
    // console.log(aquarius(10, 1, 2)); // >A; A>B; >A; A>B
}

autoTest();
