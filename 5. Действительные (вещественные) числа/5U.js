/*
5U.js 25.10.2020
Даны вещественные числа a, b, c, d, e, f. Известно, что система линейных уравнений

{ax+by=e,
{cx+dy=f.
имеет ровно одно решение. Выведите два числа x и y, являющиеся решением этой системы.

Входные данные
Вводятся шесть чисел - коэффициенты уравнений системы.
1
0
0
1
3
3
Выходные данные
Выведите ответ на задачу.
3 3

http://www.bymath.net/studyguide/alg/sec/alg15.html

 Сложение или вычитание. Этот метод состоит в следующем.            
1)  Умножаем обе части 1-го уравнения системы (1) на  (– d ), а обе части 2-го уравнения на  а  и складываем их:

                                           

    Отсюда получаем: y = ( af – cd ) / ( ae – bd ).  
2)  Подставляем найденное для  y  значение в любое уравнение системы (1):  

                                 ax + b( af – cd ) / ( ae – bd ) = c.

3)  Находим другое неизвестное:   x = ( ce – bf ) / ( ae – bd ).

Итого, решение в общем виде:
x = ( ce – bf ) / ( ae – bd )
y = ( af – cd ) / ( ae – bd )
Делитель в обоих случаях одинаковый!

1) 5U
ПЕРВОЕ УРАВНЕНИЕ.
Если a=0  - прямая горизонтальна
Если b=0  - прямая вертикальна
Если a=0 И b=0 - уравнение 0 = c. Если c=0 - бесконечно решений 1 уравнения (решение - вся плоскость). Если нет - 0 решений первого уравнения (и всей системы тоже 0).
Если ПЕРВОГО и ВТОРОЕ уравнение прямые - решение:
если прямые пересекаются - 1 решение
если прямые параллельны - либо 0 решений, либо они совпадают и бесконечное множество решений.
У параллельных прямых коэф.наклона одинаковый.  В уравнении = kx+b k - коэф. наклона.
Если одно уравнение ПЛОСКОСТЬ, а другое - ПРЯМАЯ: бесконечно решений.
Помните что делить на 0 нельзя!

*/

let a = 1;
let b = 0;
let c = 0;
let d = 1;
let e = 3;
let f = 3;

let znam = d * a - b * c;
console.log((d * e - b  * f) / znam, (a * f - c * e) / znam);










