/*
13K.js 18.11.2020
Дана строка, состоящая из n цифр (т.е. однозначных чисел), 
между которыми стоит n−1 знак операции, каждый из которых может быть либо +, либо -. 
Вычислите значение данного выражения.
Решение оформите в виде функции Evaluate(S), где S - строка с выражением, 
а возвращаемое значение функции - результат вычисления этого выражения.
Примеры
входные данные
1+2-3
выходные данные
0
*/

// Разбивает строку на массив number (чисел со знаком).
function splitWithSign(st) {
    st = st.replace(/[+]/g, '$+');
    st = st.replace(/[-]/g, '$-');
    return st.split('$').map(Number);
}

// Принимает исходную строку, возвращает число - результат арифметических действий. 
function Evaluate(str) {
    return splitWithSign(str).reduce((accumulator, currentValue) => accumulator + currentValue);
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
    let str = '2+3-2+1';
    console.log(Evaluate(str));    
}

interfaceTest();