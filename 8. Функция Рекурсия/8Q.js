/*
8Q.js 10.03.2021
Возводить в степень можно гораздо быстрее, чем за n умножений! Для этого нужно
воспользоваться следующими рекуррентными соотношениями:

an=(a**2)**(n/2)  при четном n,

an=a*a**(n−1) при нечетном n.

Реализуйте алгоритм быстрого возведения в степень. Если вы все сделаете
правильно, то сложность вашего алгоритма будет O(log(n)) .

Примеры
входные данные
2
7
выходные данные
128
входные данные
1.00001
100000
выходные данные
2.71827
*/

function power(a, n) {
    if (n == 0) {
        return 1;
    } else if (n % 2 == 0) {
        return power(a * a, n / 2);
    } else {
        return a * power(a, n - 1);
    }
}

function autoTest() {
    console.log(power(2, 7));
    console.log(power(1.00001, 100000));  
    console.log(power(2, -1));  // не проходит
}

autoTest();
