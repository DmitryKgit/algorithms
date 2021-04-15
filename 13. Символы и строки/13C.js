/*
13C.js 11.11.2020. 
Выведите все символы ASCII с кодами от 33 до 126 и их коды в следующем виде: символ код
*/

function processing() {
    let str = '';
    for (let i = 33; i < 256; i++) {
        str +=  `${String.fromCodePoint(i)} ${i}\n`;
    }
    return str;
}

console.log(processing());