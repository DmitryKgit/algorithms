/*
13S.js 11.12.2020. 
Даны две строки, возможно, содержащие пробелы. 
Выведите слово YES, если первая строка является подстрокой второй строки или слово NO в противном случае.

Решение оформите в виде функции IsSubstring(Pattern, Source).

входные данные
hole in the ground
In a hole in the ground there lived a hobbit.
выходные данные
YES

входные данные
hole on the ground
In a hole in the ground there lived a hobbit
выходные данные
NO
*/

function IsSubstring(Pattern, Source) {
       return Source.indexOf(Pattern) >= 0 ? 'YES' : 'NO';
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
       let Pattern = 'hole in the ground';
       let Source = 'In a hole in the ground there lived a hobbit.';
       console.log(IsSubstring(Pattern, Source));
}

interfaceTest();




