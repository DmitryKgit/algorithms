/*
13Y.js 21.12.2020. 
Дано слово, состоящее только из строчных латинских букв. 
Определите, какое наименьшее число букв нужно дописать к этому слову справа так, чтобы оно стало палиндромом.

Входные данные
abcd        abb
Выходные данные
3           1
*/

// разворачивает строку
function rev(str) {
    return str.split('').reverse().join('');
}

function processing(k) {    // приписывает буквы из начала строки концу строки, пока вся строка не станет равной себе развёрнутой
    let revK = rev(k);
    let result = '';
    let i = 0;
    do {
        i++;
        result = k + revK.slice(revK.length - i);
    } while ( result != rev(result));
    return i;
}

function interface() {
    console.log(processing('abb'));
}

interface();





