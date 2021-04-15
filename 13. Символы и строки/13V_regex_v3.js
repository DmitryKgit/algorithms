/*
13V.js 14.12.2020. 
В сети интернет каждому компьютеру присваивается четырехбайтовый код, который принято записывать в виде четырех чисел, 
каждое из которых может принимать значения от 0 до 255, разделенных точками. Вот примеры правильных IP-адресов:

127.0.0.0 192.168.0.1 255.0.255.255

входные данные
Программа получает на вход строку из произвольных символов.
127.0.0.1
выходные данные
Если эта строка является корректной записью IP-адреса, выведите YES, иначе выведите NO.
YES

Ошибки: не проверяется, что 
- элемент массива не пуст
- элемент имеет тип Number
- Number целый
- элемент >= 0
- нет пробелов и табуляций и символов новой строки до цифры в квадранте
- нет лидирующих нулей (если октет не 0)
0 как первая цифра допустим только если это первая И ЕДИНСТВЕННАЯ цифра.
*/

// Предикат (является ли ip адресом)
function isIP(S) {
    S = S.split('.');
    if (S.length != 4) { return false; }   // длина адреса
    for (let item of S) { // проверка на длину и величину числа, а также на пустую строку, а также проверка на ведущий ноль
        if (/\D/.test(item) || Number(item) > 255 || item.length > 3 || item.length == 0 || item == '0' && item.length != 1) { 
            return false;
        } 
    }
    return true; // Все проверки пройдены (успешно).
}

function test() { 
    console.log(isIP('255.0.1.255') ? "YES" : "NO");
    console.log(isIP('0.0.1.255') ? "YES" : "NO");
    console.log(isIP('.0.1.255') ? "YES" : "NO");       // NO
    console.log(isIP('-255.0.1.255') ? "YES" : "NO");   // NO
    console.log(isIP('1. 0.1.255') ? "YES" : "NO");     // NO
    console.log(isIP('255.0.11 .255') ? "YES" : "NO");  // NO
    console.log(isIP('255.0.11A.255 ') ? "YES" : "NO");
    console.log(isIP('255.0.11.0255 ') ? "YES" : "NO"); // NO
}

test();
// interface();




