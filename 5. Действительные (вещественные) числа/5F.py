'''
С начала суток часовая стрелка повернулась на угол в a градусов.
Определите на какой угол повернулась минутная стрелка с начала последнего часа.
Входные и выходные данные — действительные числа.

При решении этой задачи нельзя пользоваться условными инструкциями и циклами.

Входные данные
Вводится неотрицательное действительное число.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
190
выходные данные
120
'''

a = float(input())
print(a % 30 * 12)
