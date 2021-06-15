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
https://www.w3schools.com/nodejs/nodejs_filesystem.asp
*/

function fileProcess(text, fileout) {
    let [a, b] = text.split('\n').map(Number);
    let st=String(a+b);
    // console.log(a+b);
    let fs = require('fs');
    fs.writeFile(fileout, st, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

function readWriteFile(file, fileout, encoding='utf8', callback=fileProcess) {
    fs = require('fs'); 
    fs.readFile(file, encoding, function (err,data) {
        if (err) throw err;
        callback(data, fileout);
      });
}

// readFile("input.txt", 'output.txt', "utf8", fileProcess);
readWriteFile("input15A.txt", 'output.txt');