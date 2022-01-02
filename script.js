"use strict";

/* console.log(1);

setTimeout(() => {
    console.log('timeout');
}, 2000);

setTimeout(() => {
    console.log('timeout_4000');
}, 4000);

console.log(2); */


/* let k = 0;

function count () {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    alert('done');
}
count(); */


// Задача может быть на собеседовании
// Сначала выведится 2 потом 1, так как сначала выполняется синхронный код, потом асинхронный
// Задержка в 0 по умолчанию задана в 4 мс
setTimeout (() => {
    console.log(1);
}, 0);
console.log(2);