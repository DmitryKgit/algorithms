/*
13O.js 07.12.2020. 
Дана строка. Найдите в этой строке самое длинное слово и выведите его. 
Если в строке несколько слов одинаковой максимальной длины, выведите первое из них. 
Решение оформите в виде функции LongestWord (S), возвращающей значение типа str.

входные данные
In a hole in the ground there lived a hobbit.

выходные данные
ground
*/

function LongestWord(S) {
    let longestWord = '', word = '';
    for (let letter of S) {
        if (isAlpha(letter)) {      // слово продолжается
            word += letter;
        } else {                     // слово закончилось
            word = '';
        }
        if (longestWord.length < word.length) { 
            longestWord = word;
        }
    }
    return longestWord;   // если строка кончается буквой слова максимальной длины, то записывается первый if.
}

// Предикат для определения латинских букв (как заглавных, так и строчных).
function isAlpha(letter) {
       return 'A'<=letter && letter<='Z' || 'a'<=letter && letter<='z';
}

let S = 'In a hole in the ground there lived a hobbit groundground.';
console.log(LongestWord(S));

