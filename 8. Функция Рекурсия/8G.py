'''
Дано действительное положительное число a и целоe число n.

Вычислите a ** n. Решение оформите в виде функции power(a, n).

Стандартной функцией или операцией возведения в степень пользоваться нельзя.

Входные данные
Вводится действительное положительное число a и целоe число n.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
2
1
выходные данные
2
входные данные
2
2
выходные данные
4

100%
'''

def power(a, n):
    res = 1
    for i in range(abs(n)):
        res *= a
    return res if n >= 0 else 1 / res

print(power(float(input()), int(input())))
