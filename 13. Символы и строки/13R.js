/*
13R.js 10.12.2020. 
Дана строка, содержащая одно или более целых чисел от 0 до 10^9, разделенных знаками “+” или “-”. 
Вычислите значение этого выражения.

Решение оформите в виде функции Eval(S).

входные данные
21+7-10

выходные данные
18
*/

// Возвращает выражение, содержащееся в строке
function clean(s) {
       let setDigit = new Set("0123456789+-");
       let result = '';
       for (let val of s) {
              if (setDigit.has(val)) 
                     result += val;
       }
       return result;
}

// Разбивает строку на массив number (чисел со знаком).
function splitWithSign(st) {
       st = st.replace(/[+-]/g, '$$' + '$&');  // Замена + на $+, - на $-.
       return st.split('$').map(Number);
}
   
// Принимает исходную строку, возвращает число - результат арифметических действий. 
function Evaluate(str) {
       return splitWithSign(clean(str)).reduce((accumulator, currentValue) => accumulator + currentValue);
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
       let str = 'xiz 21+7-11 dsa';
       console.log(Evaluate(str));    
}

interfaceTest();





