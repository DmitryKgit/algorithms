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

// Принимает входные данные задачи, возвращает ответ. 
function Evaluate(str) {
    let res = Number(str[0]);
    for(let i=2; i<str.length; i+=2) { // Начинаем со второй цифры, пропускаем первую цифру и первый знак.
        res+=Number(str[i]) * (str[i-1]=='+' ? 1 : -1);
    }
    return res;
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
    let str = '2+3-2+1+4';
    console.log(Evaluate(str));    
}

interfaceTest();