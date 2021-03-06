'''
Задача №3807. Алгоритм Евклида
Для быстрого вычисления наибольшего общего делителя двух чисел
используют алгоритм Евклида. Он построен на следующем соотношении:
НОД(a,b)=НОД(b,a mod b).

Реализуйте рекурсивный алгоритм Евклида в виде функции gcd(a, b).

Входные данные
Вводится два целых числа.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
12
14
выходные данные
2
входные данные
256
48
выходные данные
16

100%
'''

def gcd(a, b):
    '''return the gratest common divisor of 2 int recursively'''
    a, b = abs(a), abs(b)
    return a if b == 0 else gcd(b, a % b)

a = int(input())
b = int(input())
print(gcd(a, b))

