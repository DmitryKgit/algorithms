'''Дана последовательность натуральных чисел, завершающаяся число 0.
Определите наибольшую длину монотонного фрагмента последовательности
(то есть такого фрагмента, где все элементы либо больше предыдущего,
либо меньше).
Входные данные 
Вводится последовательность целых чисел, оканчивающаяся числом 0
(само число 0 в последовательность не входит, а служит как признак ее окончания).
Выходные данные 
Выведите ответ на задачу.
Примеры
Входные данные
1
7
7
9
1
0
Выходные данные
2

test 14/14
'''

first=int(input())
counter1, counter2 = 1, 1
cmax = 1
while first!=0:
    second=int(input())
    if first<second!=0: # лишняя проверка на 0
        counter1+=1
    else:
        if counter1>cmax:
            cmax=counter1
        counter1=1
    if first>second!=0:
        counter2+=1
    else:
        if counter2>cmax:
            cmax=counter2
        counter2=1
    first=second
if counter1>cmax:  # лишнее, если second вводится в начале цикла
    cmax=counter1
if counter2>cmax:
    cmax=counter2
print(cmax)
