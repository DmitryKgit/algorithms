/*
9J.js 13.02.2020
Петя перешёл в другую школу. На уроке физкультуры ему понадобилось определить своё место в строю. Помогите ему это сделать.
Входные данные
Программа получает на вход невозрастающую последовательность натуральных чисел, 
означающих рост каждого человека в строю. 
После этого вводится число X – рост Пети. Все числа во входных данных натуральные и не превышают 200.
Выходные данные
Выведите номер, под которым Петя должен встать в строй. 
Если в строю есть люди с одинаковым ростом, таким же, как у Пети, то он должен встать после них.
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
Индекс i движется снизу вверх.
*/
// var arr = [1, 2, 3, 4 , 5];
// arr.splice(2, 0, 8);
// console.log(arr); //1, 2, 8, 3, 4, 5

var x = 158;
var i = 0;
var rank = [165, 163, 160, 160, 157, 157, 155, 154];
for (; i < rank.length; i++) {
    if (rank[i] < x) 
        break;
}
// rank.splice(count, 0, x);
// console.log(rank);
console.log(i+1);