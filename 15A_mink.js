/*
Во входном файле записано два целых числа,
каждое в отдельной строке. Выведите в выходной
файл их сумму.

Примеры
входные данные
2
2
выходные данные
4

node.js HOWTO File Read:

fs = require('fs')
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
*/

function fileProcess(err, text) {
    if(err) {
        console.log(err);
        return;
    }
    let [a, b] = text.split('\n').map(Number);
    console.log(a+b);
}

function readFile(file, encoding='utf8', callback=fileProcess) {
    fs = require('fs'); 
    fs.readFile(file, encoding, callback);
}

// readFile("input.txt", "utf8", fileProcess);
readFile("input15A.txt");