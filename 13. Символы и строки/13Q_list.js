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
       let list = S.split('');
       for (let i = 0; i < list.length; i++) {
              if (isAlpha(list[i]) && cntLetter == 0) {  // начало слова
                    list[i] = list[i].toUpperCase();
                    cntLetter++;
                     // console.log('if' + str + cntLetter);
              } else if (isAlpha(list[i]) && cntLetter != 0) {  // слово продолжается
                    list[i] = list[i].toLowerCase();
                     // console.log('else if' + str + cntLetter);
              } else {                                          // конец слова
                     cntLetter = 0;
                     // console.log('else' + str + cntLetter);
              }
       }
       return list.join('');
}

// Предикат для определения латинских букв (как заглавных, так и строчных).
function isAlpha(letter) {
       return 'A'<=letter && letter<='Z' || 'a'<=letter && letter<='z';
}

// Ввод и вывод данных
let S = 'In a hole in the ground there lived a hobbit.';
console.log(Capitalize(S));





