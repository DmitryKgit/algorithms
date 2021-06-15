'''Во входном файле записано два целых числа, каждое в отдельной строке.
Выведите в выходной файл их сумму.

Примеры
входные данные
2
2
выходные данные
4'''
input=open('15A_in.txt','r')
a,b=map(float, input.readlines())
input.close()
output=open('Output.txt','w')
print(a+b,file=output)
output.close()
