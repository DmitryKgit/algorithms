'''
Дана строка. Измените регистр символов в этой строке так, чтобы первая
буква каждого слова была заглавной, а остальные буквы - строчными.

Решение оформите в виде функции Capitalize (S), возвращающей новую строку.

Примеры
входные данные
In a hole in the ground there lived a hobbit.
выходные данные
In A Hole In The Ground There Lived A Hobbit.

TEST 100%
'''

def ToLower(c):
    return c if not ('A' <= c <= 'Z') else chr(ord(c) + ord('a') - ord('A'))

def ToUpper(c):
    return c if not ('a' <= c <= 'z') else chr(ord(c) - ord('a') + ord('A'))

def isAlpha(c):
    return 'A' <= c <= 'Z' or 'a' <= c <= 'z'

def Capitalize(s):
    answer = [' '] + list(s)
    for i in range(1, len(answer)):
        if isAlpha(answer[i]):
            if isAlpha(answer[i - 1]):
                answer[i] = ToLower(answer[i])
            else:
                answer[i] = ToUpper(answer[i])
    return ''.join(answer[1:])

s = input()
print(Capitalize(s))
