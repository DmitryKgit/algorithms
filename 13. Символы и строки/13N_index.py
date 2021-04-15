'''Дана строка, возможно, содержащая пробелы.
Определите количество слов в этой строке.
Слово — это несколько подряд идущих букв латинского алфавита
(как заглавных, так и строчных).

Решение оформите в виде функции CountWords (S),
возвращающее значение типа int.
При решении этой задачи нельзя пользоваться дополнительными строками
и списками.

Примеры
входные данные
Yesterday, all my troubles seemed so far away
выходные данные
8

mink 100%
'''

def IsLetter(letter):
    return ('A'<=letter<='Z') or ('a'<=letter<='z')

def CountWords(a):
    cnt = 0
    for i in range(1,len(a)):
        if IsLetter(a[i-1]) and not IsLetter(a[i]): # end of the word.
            cnt += 1
    return cnt+1 if IsLetter(a[-1]) else cnt

print(CountWords(input())) # seperating functions and main programm
    
