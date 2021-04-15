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
Программа получает на вход три натуральных числа A, B, N, не превосходящих 104.

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

1) isLess: Если A < N && B < N, то возвращаем Impossible
2) isEven: Если A и B чётные, а N нечётное, то возвращаем Impossible
3) isMultiple: Если объём большего сосуда кратнен объёму меньшего сосуда, а N не кратен, то Impossible

Всегда переливает в одном направлении из меньшего в больший


*/

// объём обоих сосудов меньше N
function isLess(A, B, N) {
    return A < N && B < N;
}

// в сосудах чётное количество воды, а N - нечётное
function isEven(A, B, N) {
    if (A % 2 == 0 && B % 2 == 0 && N % 2 != 0) {
        return true;
    }      
    return false;
}

// объём большего сосуда кратнен объёму меньшего сосуда, а N не кратен
function isMultiple(A, B, N) {
    if ((A % B == 0 && N % B != 0) || (B % A == 0 && N % A != 0)) {
        return true;
    } 
    return false;
}

function isLucky(A, B, N) {
    return A == N ? '>A' : B == N ? '>B' : false;
}

// всегда переливает из меньшего в больший
function fromMaxToMin(MAX, MIN, N) {
    let max = MAX;  // текущее количество воды в большем сосуде
    let min = 0;   //  текущее количество воды в меньшем сосуде
    let result = '>MAX\n';  
    let limit = 100000;     
    while (max != N && limit > 0) { // пока в одном из сосудов не станет заданного количества воды
        if (max < MIN) {
            result += `MAX>MIN\n`;
            min = max;
            limit--;

            result += `>MAX\n`;
            max = MAX;
            limit--;
        }

        result += `MAX>MIN\n`;
        max = max - MIN + min;
        limit--;

        if (max == N) { 
            return result;
        }

        result += `MIN>\n`;
        min = 0;
        limit--;
    }
    return limit > 0 ? result : 'Impossible';
}
fromMaxToMin(10, 2, 4)


function aquarius(A, B, N) {
    if (isLess(A, B, N) || isEven(A, B, N) || isMultiple(A, B, N)) {
        return 'Impossible';
    }
    if (isLucky(A, B, N)) {
        return isLucky(A, B, N)
    }

    let result = A > B ? fromMaxToMin(A, B, N) : fromMaxToMin(B, A, N);
    if (A > B) {
        result = result.replace(/Vmax/g, 'A');
        result = result.replace(/Vmin/g, 'B');
    } else {
        result = result.replace(/Vmax/g, 'B');
        result = result.replace(/Vmin/g, 'A');
    }
    return result;
}

function autoTest() {
    console.log(aquarius(2, 10, 4));
}

autoTest();