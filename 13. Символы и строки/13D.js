/*
13D.js 11.11.2020. 
Выведите подряд, без пробелов, все символы, лежащие в таблице ASCII между двумя заданными символами.

Входные данные
Программа получает на вход два символа, каждый в отдельной строке и должна вывести строку, 
начинающуюся первым из заданных символов и заканчивающуюся вторым.
A       0
D       9
выходные данные
ABCD    0123456789
*/

function processing(start, end) {
    let str = '';
    for (let i = start.codePointAt(0); i <= end.codePointAt(0); i++) {
        str +=  String.fromCodePoint(i);
    }
    console.log(str);
}

let start = '0';
let end = '9';
processing(start, end);