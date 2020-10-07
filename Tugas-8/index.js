// di index.js
var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], readitem1 => {
    readBooks(readitem1, books[1], readitem2 =>{
    readBooks(readitem2, books[2], readitem3 =>{
    readBooks(readitem3, books[3], readitem4 =>{
        console.log(readitem4);
    })
    })
    })
})
