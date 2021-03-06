/*
9J.js 28.04.2021
Петя перешёл в другую школу. На уроке физкультуры ему понадобилось определить своё место в строю. Помогите ему это сделать.

Входные данные
Программа получает на вход невозрастающую последовательность натуральных чисел, означающих рост каждого человека в строю. После этого вводится число X – рост Пети. Все числа во входных данных натуральные и не превышают 200.

Выходные данные
Выведите номер, под которым Петя должен встать в строй. Если в строю есть люди с одинаковым ростом, таким же, как у Пети, то он должен встать после них.

Примеры
входные данные
165 163 160 160 157 157 155 154 
162
выходные данные
3
входные данные
165 163 160 160 157 157 155 154 
160
выходные данные
5
*/

// сравнивает рост с каждым элементом массива - возвращает число - ответ на задачу
function linePos(arr, X) {
    let pos = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (X <= arr[i]) {
            pos = i + 2;
        }
    }    
    return pos;      // если Петя самый низкий - ставим его в конец списка
}

// принимает число, печатает число на консоль
function arrayPrint(num) {
    console.log(String(num));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
    arrayPrint(linePos(arrayInput()));    
}

function test() {
    arrayPrint(linePos([165, 163, 160, 160, 157, 157, 155, 154], 162));
    arrayPrint(linePos([165, 163, 160, 160, 157, 157, 155, 154], 160));
    arrayPrint(linePos([165, 163, 160, 160, 157, 157, 155, 154], 153));
    arrayPrint(linePos([165, 165, 165], 165));
}

//interfaceTest();
test();
