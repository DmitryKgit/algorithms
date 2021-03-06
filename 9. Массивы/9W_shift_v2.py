'''
Задача №3850. Сжатие списка
Дан список целых чисел. Требуется “сжать” его,
переместив все ненулевые элементы в левую часть списка,
не меняя их порядок, а все нули - в правую часть. Порядок ненулевых
элементов изменять нельзя, дополнительный список использовать нельзя,
задачу нужно выполнить за один проход по списку. Распечатайте полученный
список.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
4 0 5 0 3 0 0 5
выходные данные
4 5 3 5 0 0 0 0

100%
'''

def listCompres(A):
    '''gets a list and move all nulls to the right side and not nulls to the left'''
    shiftIndex = A.index(0)
    for i in range(shiftIndex, len(A)):
        if A[i] != 0:
            A[shiftIndex] = A[i]
            shiftIndex += 1
    for i in range(shiftIndex, len(A)):
        A[i] = 0

A = list(map(int, input().split()))
listCompres(A)
print(*A)
