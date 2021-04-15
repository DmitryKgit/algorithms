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
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

function processing(str) { // удаляет буквы с начала строки, пока вся строка не станет равной себе развёрнутой
    let st = str;
    for (let i = 0; i < str.length; i++) {
        if (isPalindrome(st)) {
            return i;
        }        
    st = st.slice(1);
    }
}

function interface() {
    console.log(processing('b'));
}

interface();





