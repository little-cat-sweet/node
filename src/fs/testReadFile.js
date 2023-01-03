const fs = require('fs')
fs.readFile('test.txt', 'utf8', function (err,dataStr) {
    if(! err){
        console.log("read information : " + dataStr)
    }
})