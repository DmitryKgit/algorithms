/*
13N.js 20.11.2020. 
Дана строка, возможно, содержащая пробелы. Определите количество слов в этой строке. 
Слово — это несколько (>0) подряд идущих букв латинского алфавита (как заглавных, так и строчных).

Решение оформите в виде функции CountWords (S), возвращающее значение типа int. 
При решении этой задачи нельзя пользоваться дополнительными строками и списками.

входные данные
Yesterday, all my troubles seemed so far away

выходные данные
8
*/

// Возвращает количество слов (из латинских букв) в строке.
function CountWords(str) {
       let cntWord=0, cntLetter = 0; 
       for(let letter of str) { 
           if (isAlpha(letter)) {     // Letter, the word is in progress.
               cntLetter++;
           }
           else if (cntLetter != 0) { // Not letter, but was letter before: word end.
               cntLetter = 0;
               cntWord++; 
           }
       }
       return isAlpha(S[S.length-1]) ? cntWord+1 : cntWord; // Если последний - буква, считаем последнее слово.
}

// Предикат для определения латинских букв (как заглавных, так и строчных).
function isAlpha(letter) {
       return 'A'<=letter && letter<='Z' || 'a'<=letter && letter<='z';
}

let S = 'Yesterday, all my troubles seemed so far away';
console.log(CountWords(S));