'''
Для данного числа n<100 закончите фразу “На лугу пасется...” одним из возможных продолжений: “n коров”, “n корова”, “n коровы”, правильно склоняя слово “корова”.

Входные данные
Вводится натуральное число.

Выходные данные
Программа должна вывести введенное число n и одно из слов: korov, korova или korovy. Между числом и словом должен стоять ровно один пробел.

Примеры
входные данные
1
выходные данные
1 korova
входные данные
2
выходные данные
2 korovy
входные данные
5
выходные данные
5 korov
'''
a = int(input())
ost=a%10
notteen=a//10!=1
if ost==1 and notteen:
    print(a,'korova')
elif ost in {2,3,4} and notteen :
    print(a,'korovy')
else:
    print(a,'korov')
