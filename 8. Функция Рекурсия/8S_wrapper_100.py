'''
Головоломка “Ханойские башни” состоит из трех стержней, пронумерованных числами
1, 2, 3. На стержень 1 надета пирамидка из n дисков различного диаметра
в порядке возрастания диаметра. Диски можно перекладывать с одного стержня на
другой по одному, при этом диск нельзя класть на диск меньшего диаметра.
Необходимо переложить всю пирамидку со стержня 1 на стержень 3 за минимальное
число перекладываний.

Напишите программу, которая решает головоломку; для данного числа дисков n
печатает последовательность перекладываний в формате a b c, где a — номер
перекладываемого диска, b — номер стержня с которого снимается данный диск,
c — номер стержня на который надевается данный диск.

Например, строка 1 2 3 означает перемещение диска номер 1 со стержня 2 на
стержень 3. В одной строке печатается одна команда. Диски пронумерованы числами
от 1 до n в порядке возрастания диаметров.

Программа должна вывести минимальный (по количеству произведенных операций)
способ перекладывания пирамидки из данного числа дисков.


Указание: подумайте, как переложить пирамидку из одного диска? Из двух дисков?
Из трех дисков? Из четырех дисков? Пусть мы научились перекладывать пирамидку
из n дисков с произвольного стержня на любой другой, как переложить пирамидку
из n+1 диска, если можно пользоваться решением для n дисков.

Напишите функцию move (n, x, y), которая печатает последовательнось
перекладываний дисков для перемещения пирамидки высоты n со стержня номер x
на стержень номер y.

Входные данные
Вводится натуральное число - количество дисков.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
2
выходные данные
1 1 2
2 1 3
1 2 3

100%
'''

'''
move (n, x, y) печатает последовательнось перекладываний дисков
для перемещения пирамидки высоты n
со стержня номер x
на стержень номер y.    
'''
def move(n, x, y):
    buf=6-x-y      # Номер (buffer) буферного стержня (1-3) - 2 по условию.
    _move(n, x, y, buf)
    
def _move(n, x, y, buf):
    if n!= 0:
        _move(n-1, x, buf, y)
        print(n, x, y)
        _move(n-1, buf, y, x)

x=1 # стержень с которого перемещаем диски
y=3 # стержень на который перемещаем диски
n=int(input()) # натуральное число - количество дисков.
move(n, x, y)  # move (n, x, y), которая печатает последовательнось перекладываний
