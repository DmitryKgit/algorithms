/*
13A.js 11.11.2020. 
Считайте со стандартного ввода символ и выведите его код.

Входные данные
Программа получает на вход один символ с кодом от 33 до 126.
A
Выходные данные
Нужно вывести одно число - код считанного символа
65
*/

function processing(str) {
    // const icons = '⯰★♲';
    // console.log(icons.codePointAt(2));
// expected output: "9733"
    console.log(str.codePointAt(0));
}

let str = 'A';
processing(str);