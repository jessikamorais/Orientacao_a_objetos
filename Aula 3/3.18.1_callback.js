//Exemplo 3.18.1 - 01a_callback.js
const fs = require('fs')

const onRead = function onRead (err, buf) {
    if(err)
        console.log("houve um erro")
    else
        console.log(buf.toString())
}

fs.readFile( '3.17_texto.txt', onRead )