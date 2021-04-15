/*
13U.js 14.12.2020. 
Дана строка, возможно, содержащая пробелы. 
Определите, является ли эта строка палиндромом, при условии, что заглавные и строчные буквы не различаются, 
а все символы, не являющиеся буквами, должны быть пропущены. Выведите слово YES, 
если слово является палиндромом и слово NO, если не является.

Длина входной строки может быть до 100000 символов. 
При решении этой задачи нельзя пользоваться дополнительными строками и списками, модифицировать исходную строку.

входные данные
Was.it.a.rat.I.saw?
выходные данные
YES
входные данные

выходные данные
NO
*/

// Предикат для определения латинских букв (как заглавных, так и строчных).
function isAlpha(letter) {
       return 'A'<=letter && letter<='Z';
}

// перебор строки
function IsPalindrome(S) {
    let arr = S.toUpperCase().split('').filter(letter => isAlpha(letter));
    return arr.join('') == arr.reverse().join('') ? "YES" : "NO";
}

// Ввод и вывод данных
function interface() { 
    let S = 'Was.it.a.rat.I.saw?';
    console.log(IsPalindrome(S));
}

interface();




