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
    let list = S.split('');
    if (isAlpha(list[0])) list[0] = list[0].toUpperCase(); 
    for (let i = 1; i < list.length; i++) {
        if (isAlpha(list[i]) && !isAlpha(list[i - 1])) {  // начало слова
            list[i] = list[i].toUpperCase();
        } else if (isAlpha(list[i]) && isAlpha(list[i - 1])) {  // слово продолжается
            list[i] = list[i].toLowerCase();
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





