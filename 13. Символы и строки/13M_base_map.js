/*
13M.js 25.11.2020
В шифре Цезаря каждый символ заменяется на другой символ, 
третий по счету в алфавите после данного, с цикличность. 
То есть символ A заменяется на D, символ B - на E, символ C - на F, ..., символ Z на C. 
Аналогично строчные буквы заменяются на строчные буквы. Все остальные символы не меняются.
Дана строка, зашифруйте ее при помощи шифра Цезаря. 
Решение оформите в виде функции CaesarCipher (S, k), 
возвращающей новую строку. <сode>S — исходная строка, k — величина сдвига. 
Функцию нужно вызывать со значением k=3.
Указание: сделайте функцию CaesarCipherChar(c, k), шифрующую один символ.
Примеры
входные данные
In a hole in the ground there lived a hobbit.
выходные данные
Lq d kroh lq wkh jurxqg wkhuh olyhg d kreelw.
*/

// Правило. Возвращает код начала алфавита для букв, и 0 для не букв.
function Base(char) {
    if ('A' <= char && char <= 'A') return 'A'.codePointAt(0); // Код 'A'
    if ('a' <= char && char <= 'z') return 'a'.codePointAt(0); // Код 'a'
    return 0;
}

//  Шифрует (смещает на k) и возвращает один символ. МЕХАНИЗМ.
function CaesarChar(char, k) {
    let base=Base(char);
    if(base==0) return char;
    return String.fromCodePoint((char.codePointAt(0)-base+k)%26+base);
}

// Шифрует строку, и возвращает новую зашифрованную строку. ДВИЖОК. 
function CaesarCipher(str, k) {
    return str.split('').map(char => CaesarChar(char, k)).join('');
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
    let str = 'In a hole in the ground there lived a hobbit.';
    let k = 3;
    console.log(CaesarCipher(str, k));    
}

interfaceTest();

// let a = 'a';
// let b = 3;
// // while ()
// let c = String.fromCodePoint(a.codePointAt(0)+1);
// console.log(a.codePointAt(0), c);