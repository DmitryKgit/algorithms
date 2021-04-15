/*
6A.js 30.10.2020. 
На языке программирование Python нельзя использовать циклы.
Входные данные
Дана строка.

Выходные данные
Сначала выведите третий символ этой строки.

Во второй строке выведите предпоследний символ этой строки.

В третьей строке выведите первые пять символов этой строки.

В четвертой строке выведите всю строку, кроме последних двух символов.

В пятой строке выведите все символы с четными индексами (считая, что индексация начинается с 0, 
поэтому символы выводятся начиная с первого).

В шестой строке выведите все символы с нечетными индексами, то есть начиная со второго символа строки.

В седьмой строке выведите все символы в обратном порядке.

В восьмой строке выведите все символы строки через один в обратном порядке, начиная с последнего.

В девятой строке выведите длину данной строки.

входные данные
Abrakadabra
выходные данные
r
r
Abrak
Abrakadab
Arkdba
baaar
arbadakarbA
abdkrA
11
*/

function processing(str) {
    console.log(str[2]);

    console.log(str[str.length - 2]);

    console.log(str.substr(0, 5)); // slice splice
    
    console.log(str.slice(0, -2));

    let str5 = '';
    for (let i = 0; i < str.length; i += 2) {
        str5 += str[i];
    }
    console.log(str5);

    let str6 = '';
    for (let i = 1; i < str.length; i += 2) {
        str6 += str[i];
    }
    console.log(str6);

    let str7 = '';
    for (let i = str.length - 1; i >= 0; i--) {
        str7 += str[i];
    }
    console.log(str7);

    let str8 = '';
    for (let i = str.length - 1; i >= 0; i -= 2) {
        str8 += str[i];
    }
    console.log(str8);

    console.log(str.length);
}

let str = 'Abrakadabra';
processing(str);