'''
На дорогах Ханоя было введено одностороннее круговое движение,
поэтому теперь диск со стержня 1 можно перекладывать только на стержень 2,
со стержня 2 на 3, а со стержня 3 на 1.

Решите головоломку с учетом этих ограничений.
Вам не нужно находить минимальное решение, но
количество совершенных перемещений не должно быть больше 200000,
при условии, что количество дисков не превосходит 10.

Входные данные
Вводится натуральное число - количество дисков.

Выходные данные
Выведите ответ на задачу. Башню необходимо переместить со стержня 1
на стержень 3.

Примеры
входные данные
2
выходные данные
1 1 2
1 2 3
2 1 2
1 3 1
2 2 3
1 1 2
1 2 3

TEST 100% - Юрий Багдасаров
'''

def move(n, x, y):
    other = (6 - x - y) # Стержень с номером отличным от x и y
    if n != 0:
        if x == 3 and y == 1 or y - x == 1: # Одно перекладывание по циклу
            move(n - 1, x, other)
            print(n, x, y)
            move(n - 1, other, y)
        else: # Два перекладывания по циклу
            move(n - 1, x, y)
            print(n, x, other)
            move(n - 1, y, x)
            print(n, other, y)
            move(n - 1, x, y)
    

move(int(input()), 1, 3)
