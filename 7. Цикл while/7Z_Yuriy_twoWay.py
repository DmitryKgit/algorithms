'''
У исполнителя “Водолей” есть два сосуда, первый объемом A литров, второй объемом B литров, а также кран с водой. Водолей может выполнять следующие операции:

1) Наполнить сосуд A (обозначается >A).
2) Наполнить сосуд B (обозначается >B).
3) Вылить воду из сосуда A (обозначается A>).
4) Вылить воду из сосуда B (обозначается B>).
5) Перелить воду из сосуда A в сосуд B (обозначается как A>B).
6) Перелить воду из сосуда B в сосуд A (обозначается как B>A).
7) Команда переливания из одного сосуда в другой приводят к тому, что либо
первый сосуд полностью опустошается, либо второй сосуд полность наполняется.

Входные данные
Программа получает на вход три натуральных числа A, B, N, не превосходящих 10^4.

Выходные данные
Необходимо вывести алгоритм действий Водолея,
который позволяет получить в точности N литров в одном из сосудов,
если же такого алгоритма не существует, то программа должна вывести текст
Impossible.

Количество операций в алгоритме не должно превышать 10^5.
Гарантируется, что если задача имеет решение, то есть решение,
которое содержит не более, чем 10^5 операций.

Тесты к этой задаче закрытые.

Примеры
входные данные
3
5
1
выходные данные
>A
A>B
>A
A>B
входные данные
3
5
6
выходные данные
Impossible

Время - дольше:
Максимальное процессорное время	0.121	86
Максимальный расход памяти	16818176	23
Максимальное астрономическое время	0.126	84

TEST 100%
Отличие Водолей 11S от 7Z в том, что в 11S все числа вводятся на одной строке. 
Отличие C++ от Py что этот код проходит тест и 7Z и 11S без изменений: cin >> a >> b >> n;

Чётные действия: Переливаем из большего в меньший

Нечётные действия:
    Если в большем есть вода, выливаем из меньшего
    Иначе наливаем в больший

Не запоминаем действия.

'''

aMax = int(input())
bMax = int(input())
a = 0
b = 0
n = int(input())
count1 = 0
count2 = 0
aSym = 'A'
bSym = 'B'
if aMax < bMax:
    aSym = 'B'
    bSym = 'A'
    aMax, bMax = bMax, aMax
while count1 <= 100000:
    if a > 0:
        b = 0
    else:
        a = aMax
    if a + b > bMax:
        a = a + b - bMax
        b = bMax
    else:
        b = a + b
        a = 0
    if a == n or b == n:
        break
    count1 += 2
a = 0
b = 0
while count2 <= 100000: 
    if a < aMax:
        b = bMax
    else:
        a = 0
    if a + b > aMax:
        b = a + b - aMax
        a = aMax
    else:
        a += b
        b = 0
    if a == n or b == n:
        break
    count2 += 2
a = 0
b = 0
if count1 > 100000 and count2 > 100000:
    print('Impossible')
elif count1 < count2:
    while a != n and b != n:
        if a > 0:
            b = 0
            print(bSym, '>', sep='')
        else:
            a = aMax
            print('>', aSym,  sep='')
        if a + b > bMax:
            a = a + b - bMax
            b = bMax
        else:
            b = a + b
            a = 0
        print(aSym, '>', bSym, sep='')
else:
    while a != n and b != n:
        if a < aMax:
            b = bMax
            print('>', bSym, sep='')
        else:
            a = 0
            print(aSym, '>', sep='')
        if a + b > aMax:
            b = a + b - aMax
            a = aMax
        else:
            a += b
            b = 0
        print(bSym, '>', aSym, sep='')
