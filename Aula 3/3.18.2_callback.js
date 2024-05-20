//Exemplo 3.18.2 - 01a_callback.js
const fs = require('fs')

fs.readFile(
    '3.17_texto.txt', 
    (err, buf) => {
        if(err)
            console.log("houve um erro")
        else
            console.log(buf.toString())
    })