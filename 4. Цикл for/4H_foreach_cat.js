/*
4H.js 01.06.2019
Напишите программу, которая по данному числу n от 1 до 9 выводит на экран n пингвинов. 
Изображение одного пингвина имеет размер 5×9 символов, между двумя соседними пингвинами также имеется пустой 
(из пробелов) столбец. Разрешается вывести пустой столбец после последнего пингвина. 
Для упрощения рисования скопируйте пингвина из примера в среду разработки.

Входные данные
Вводится натуральное число.

Выходные данные
Выведите ответ на задачу.

Примечание
Учтите, что вывод данных на экран производится построчно, а не попингвинно.

В некоторых языках программирования символ обратного слэша “\” в текстовых строках имеет специальное значение. 
Чтобы включить в состав текстовой строки такой символ, его нужно повторить дважды. 
Например, для вывода на экран одного такого символа можно использовать такой код: print("\\").

Примеры
входные данные
3
выходные данные
   _~_       _~_       _~_    
  (o o)     (o o)     (o o)   
 /  V  \   /  V  \   /  V  \  
/(  _  )\ /(  _  )\ /(  _  )\ 
  ^^ ^^     ^^ ^^     ^^ ^^   
входные данные
1
выходные данные
   _~_    
  (o o)   
 /  V  \  
/(  _  )\ 
  ^^ ^^   
*/

let n = 3;
let cat = ['   /\\\ ~ /\\ ', '  ( o _ o) ','  /  o  \\  ',' /(  _  )\\ ',  '  /^^ ^^   '];
for (let elem of cat)
    console.log(elem.repeat(n));
