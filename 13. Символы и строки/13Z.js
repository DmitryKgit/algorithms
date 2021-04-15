/*
13Z.js 21.12.2020. 
Строка состоит из целых чисел, принимающих значения от 0 до 10^9, разделенных знаками операций “+”, “-” и “*”. 
Вычислите значение этого выражения выполняя действия по правилам арифметики.

Входные данные
10-2*3
Выходные данные
4
*/

// Разбивает строку на массив number (чисел со знаком и множителей), выполняет операцию умножения.
function splitWithSign(st) {
    st = st.replace(/[+-]/g, '$$' + '$&');  // Замена + на $+, - на $-.
    return st.split('$').map(item => {
        return item.split('*').map(Number).reduce((accumulator, currentValue) => accumulator*currentValue);
    });
}

// Принимает исходную строку, возвращает число - результат арифметических действий. 
function Evaluate(str) {
    return splitWithSign(str).reduce((accumulator, currentValue) => accumulator + currentValue);
}

function interface() {
    console.log(Evaluate('10-2*3'));
}

interface();






