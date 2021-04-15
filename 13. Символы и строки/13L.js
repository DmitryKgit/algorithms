/*
13L.js 20.11.2020. 
Дано выражение одно из следующих видов: “A+B”, “A-B” или “A*B”, где A и B - целые числа от 0 до 109. 
Определите значение этого выражения.

Решение оформите в виде функции Eval(S).

входные данные
2*2             100-101

выходные данные
4                -1
*/

function Eval(S) {
        let plus = S.indexOf('+');
        let minus = S.indexOf('-');
        let multi = S.indexOf('*');
        if (plus >= 0) {
                return Number(S.slice(0, plus) + Number(S.slice(plus)));
        }
        if (minus >= 0) {
                return Number(S.slice(0, minus)) - Number(S.slice(minus + 1));
        }
        if (multi >= 0) {
                return Number(S.slice(0, multi)) * Number(S.slice(multi + 1));
        }
}

let S = '2*3';
console.log(Eval(S), S.split('-'));