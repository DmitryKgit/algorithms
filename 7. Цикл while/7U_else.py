'''
Дана последовательность натуральных чисел, завершающаяся числом 0.
Определите, какое наибольшее число подряд идущих элементов этой
последовательности равны друг другу.

Входные данные
Вводится последовательность целых чисел, оканчивающаяся числом 0
(само число 0 в последовательность не входит, а служит как признак ее окончания).

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1
7
7
9
1
0
выходные данные
2

TEST 100%

Поиск максимума в else.
Проблема для аналогичных задач, не заканчивающихся нулём:
Необходим поиск максимума после цикла - контрольный выстрел т.к.
если последовательность завершается максимальной последовательность
подряд идущих, ответ неверен
'''

old = int(input())
count = maximum = 1
while old != 0:
    new = int(input())
    if new == old: # Последовательность подряд идущих продолжается
        count += 1  
    else: # Последовательность подряд идущих закончена
        if maximum < count:
            maximum = count
        count = 1
        old = new
print(maximum)
