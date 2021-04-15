/*
13Q.js 07.12.2020. 
Дана строка. Измените регистр символов в этой строке так, чтобы первая буква каждого слова была заглавной, 
а остальные буквы - строчными.

Решение оформите в виде функции Capitalize (S), возвращающей новую строку.

входные данные
In a hole in the ground there lived a hobbit.

выходные данные
In A Hole In The Ground There Lived A Hobbit.
*/

function Capitalize(S) {
       let cntLetter = 0;
       let str = ''; 
       for (let letter of S) {
              if (isAlpha(letter) && cntLetter == 0) {  // начало слова
                     str += letter.toUpperCase();
                     cntLetter++;
                     // console.log('if' + str + cntLetter);
              } else if (isAlpha(letter) && cntLetter != 0) {  // слово продолжается
                     str += letter.toLowerCase();
                     // console.log('else if' + str + cntLetter);
              } else {                                          // конец слова
                     str += letter;
                     cntLetter = 0;
                     // console.log('else' + str + cntLetter);
              }
       }
       return str;
}

// Предикат для определения латинских букв (как заглавных, так и строчных).
function isAlpha(letter) {
       return 'A'<=letter && letter<='Z' || 'a'<=letter && letter<='z';
}

// Ввод и вывод данных
let S = 'In   a hole in the ground there lived a hobbit.';
console.log(Capitalize(S));





