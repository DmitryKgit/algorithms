#coding: utf-8
import math

'''По данным числам n и k (0kn) вычислите Сkn .
Для решения используйте рекуррентное соотношение Cnk=Cn−1k−1+Ckn−1.

Решение оформите в виде функции C(n, k).

Входные данные
Вводятся целые числа n и k.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
4
2
выходные данные
6


при n = k или k = 0 количество сочетаний = 1, при подстановке n!/k!(n-k)!
(сочетание n по k)

https://ru.wikipedia.org/wiki/Сочетание

'''

def C(n,k):
    if k==0 or k==n:
        return 1
    return C(n-1,k-1)+C(n-1,k)

print (C(int(input()), int(input())))    
