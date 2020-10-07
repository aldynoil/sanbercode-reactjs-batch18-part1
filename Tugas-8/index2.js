var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
readBooksPromise(10000, books[0]).then(
    readitem1 => {
    readBooksPromise(readitem1, books[1]) .then(
        readitem2 =>{
        readBooksPromise(readitem2, books[2]) .then(
            readitem3 =>{
    })
    })
    })