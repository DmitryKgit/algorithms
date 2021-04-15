/*
13M.js 20.11.2020. 
В шифре Цезаря каждый символ заменяется на другой символ, третий по счету в алфавите после данного, с цикличность. 
То есть символ A заменяется на D, символ B - на E, символ C - на F, ..., символ Z на C. 
Аналогично строчные буквы заменяются на строчные буквы. Все остальные символы не меняются.

Дана строка, зашифруйте ее при помощи шифра Цезаря. 
Решение оформите в виде функции CaesarCipher (S, k), возвращающей новую строку.
<сode>S — исходная строка, k — величина сдвига. Функцию нужно вызывать со значением k=3.

Указание: сделайте функцию CaesarCipherChar(c, k), шифрующую один символ.
входные данные
In a hole in the ground there lived a hobbit.

выходные данные
Lq d kroh lq wkh jurxqg wkhuh olyhg d kreelw.
*/

// механизм: применяет правило ко всем символам строки.
function CaesarCipher(S, k) {
        return S.split('').map(item => CaesarCipherChar(item, k)).join('');
}

// правило: шифрует 1 символ c, возвращает зашифрованный символ. k - смещение шифрования. 
function CaesarCipherChar(c, k) {
        return Base(c) != 0 ? String.fromCodePoint(Base(c) + (c.codePointAt(0) % Base(c) + k) % 26) : c;
}

// правило: проверяет, является ли символ буквой латинского алфавита
function Base(c) {
        return c >= 'A' && c <= 'Z' ? 'A'.codePointAt(0) : c >= 'a' && c <= 'z' ? 'a'.codePointAt(0) : 0;
}

let S = 'In a hole in the ground there lived a hobbit.xyz';
console.log(CaesarCipher(S, 3));