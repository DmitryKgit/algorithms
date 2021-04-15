/*
13T_V3.js 11.12.2020. 
Дана строка, возможно, содержащая пробелы. 
Определите, какая буква латинского алфавита (или какие буквы) в этой строке встречается чаще всего. 
При решении этой задачи заглавные и строчные буквы считаются одинаковыми, а прочие символы, не являющиеся буквами, 
не учитываются.

Программа должна вывести в первой строке все буквы, которые встречаются чаще всего в исходной строке. 
Выводить буквы необходимо в заглавном написании, в алфавитном порядке, без пробелов. 
Во второй строке выведите единственное число - сколько раз в данной строке встречаются эти буквы.

При решении этой задачи нельзя пользоваться вложенными циклами. Входная строка должна обрабатываться за один проход.

входные данные
- We all live in the Yellow Submarine!
выходные данные
EL
5

по времени O(N)
*/

// Предикат для определения латинских букв (как заглавных, так и строчных).
function isAlpha(letter) {
       return 'A'<=letter && letter<='Z';
}

// перебор строки, возвращает массив результатов
function cntLetter(str) {
    let counters = new Array(26).fill(0);
    str = str.toUpperCase();
    for (let letter of str) {
        if (isAlpha(letter)) {
            counters[letter.codePointAt(0) - 65]++;
        }
    }
    return counters;
}

// нахождение максимального результата
function transform(counters) {
    let max = Math.max.apply(null, counters);
    let s = '';
    for (let i = 0; i < counters.length; i++) {
        if (max == counters[i]) {
            s += String.fromCharCode(i + 65);
        }
    }
    return [s ,max];
}

// Ввод и вывод данных
function interface() { 
    let input = '- We all live in the Yellow Submarine!';
    let result = transform(cntLetter(input));
    console.log(result[0], '\n' + result[1]);
}

interface();




