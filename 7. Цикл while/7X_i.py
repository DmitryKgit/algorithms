'''
Определите наименьшее расстояние между двумя локальными максимумами последовательности натуральных
чисел, завершающейся числом 0. Локальным максимумом называется такое число в последовательности, которое
больше своих соседей. Если в последовательности нет двух локальных максимумов, выведите число 0.

Начальное и конечное значение при этом локальными максимумами не считаются.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность
не входит, а служит как признак ее окончания).

Выходные данные
Выведите ответ на задачу.

Пояснение к тестам:
В первом тесте локальными максимумами являются все двойки (они больше соседей).
Между последними - расстояние наименьшее.

Во втором тесте нет локального максимума.

Примеры
входные данные
1
2
1
1
2
1
2
1
0
выходные данные
2
входные данные
1
2
3
0
выходные данные
0

100%
'''

x = 1
i = 0
Val1 = 1 # первое значение.
Val2 = 0 # второе значение которое будет содержать локальный максимум.
Val3 = 0 # третье значение.
max1_n = 0 # первый локальный максимум.
max2_n = 0 # второй локальный максимум.
Res = -1 # расстояние между локальными максимумами.
while Val1 != 0:
    i += 1
    Val3 = Val2
    Val2 = Val1
    Val1 = int(input())
    if i > 2 and Val2 > Val1 and Val2 > Val3 and Val1 != 0:
        max2_n = max1_n
        max1_n =  i
        if (max1_n > 0) and (max2_n > 0) and (max1_n - max2_n < Res or Res == -1):
            Res = max1_n - max2_n
print(Res if Res!=-1 else 0)






