'''
Яша плавал в бассейне размером N*M метров и устал.
В этот момент он обнаружил, что находится на расстоянии x метров от одного
из длинных бортиков (не обязательно от ближайшего) и y метров от одного из
коротких бортиков. Какое минимальное расстояние должен проплыть Яша, чтобы
выбраться из бассейна на бортик?
Входные данные
Программа получает на вход числа N, M, x, y.
Выходные данные
Программа должна вывести число метров, которое нужно проплыть Яше до бортика.
Примеры
Входные данные
23
52
8
43
Выходные данные
8
'''
N=int(input('Введите размер бассейна N: ' ))
M=int(input('Введите размер бассейна M: ' ))
x=int(input('Введите расстояние до длинного бортика: ' ))
y=int(input('Введите расстояние до короткого бортика: ' ))
width = N if N<M else M
length = M if N<M else N
min1= y if y<length-y else length-y
min2 = x if x<width-x else width-x
print(min1 if min2>min1 else min2)
