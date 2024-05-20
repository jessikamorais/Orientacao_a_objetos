//Exemplo 3.18.3 - 01b_callback.js
const fs = require('fs')

fs.readFile(
    '3.17_texto.txt', 
    (err, buf) => {
        if(err)
            throw err
        else
            console.log(buf.toString())
    })