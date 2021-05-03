/*
8Z.js 19.04.2021
В небоскребе n этажей. Известно, что если уронить стеклянный шарик с этажа номер p, и шарик разобъется, то если уронить шарик с этажа номер p+1, то он тоже разобъется. Также известно, что при броске с последнего этажа шарик всегда разбивается.

Вы хотите определить минимальный номер этажа, при падении с которого шарик разбивается. Для проведения экспериментов у вас есть два шарика. Вы можете разбить их все, но в результате вы должны абсолютно точно определить этот номер.

Определите, какого числа бросков достаточно, чтобы заведомо решить эту задачу.

Входные данные
Программа получает на вход количество этажей в небоскребе n

Выходные данные
Требуется вывести наименьшее число бросков, при котором можно всегда решить задачу.

Тесты к этой задаче закрытые.

Примечание
Комментарий к первому примеру. Нужно бросить шарик со 2-го этажа. Если он разобъется, то бросим второй шарик с 1-го этажа, а если не разобъется - то бросим шарик с 3-го этажа.

Подсказки.
1. Как следует действовать, если шарик был бы только один?
    Решение возможно только для двухэтажного здание. Нужно бросить шарик с 1 этажа.
2. Пусть шариков два и мы бросили один шарик с этажа номер k. Как мы будем действовать в зависимости от того, разобъется ли шарик или нет?
    Если шарик разбился, следующий шар разбиваем на этажах, начиная от 1 до k - 1 этажа. 
    Если шарик не разбился, следующий шар разбиваем на этажах от k + 1 до n. 
3. Пусть f(n) - это минимальное число бросков, за которое можно определить искомый этаж, если бы в небоскребе было n этажей. Выразите f(n) через значения f(a) для меньших значений a.
    f(1) = 0
    f(2) = 1
    f(3) = 2
    f(4) = 2
    f(5) = 3
    f(6) = 3
    f(7) = 3
    f(8) = 3

Примеры
входные данные
4
выходные данные
2
входные данные
7
выходные данные
3

Решение:
1) Бросаем шарик с этажа k
2) Если шар разбился - кидаем второй поочерёдно с 1 до k - 1 этажа, 
3) Если шар не разбился - кидаем его на отрезке n - k, начиная с k - 1 этажа
4) Повторяем пункт 2 и 3
*/

function fall(n, k = 1) {
    if (n <= 1) {
        return 0;
    } else {
        return fall(n - k, k + 1) + 1;
    }
}

console.log(fall(1));  // 0
console.log(fall(2));  // 1 
console.log(fall(3));  // 2 
console.log(fall(4));  // 2 
console.log(fall(5));  // 3 
console.log(fall(6));  // 3 
console.log(fall(7));  // 3 
console.log(fall(8)); // 4
console.log(fall(9)); // 4
console.log(fall(10)); // 4
console.log(fall(11)); // 4
console.log(fall(12)); // 5
console.log(fall(13)); // 5
console.log(fall(14)); // 5
console.log(fall(15)); // 5
console.log(fall(16)); // 5