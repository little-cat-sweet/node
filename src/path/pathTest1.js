const fs = require('fs')
fs.readFile(__dirname + "/charFiles/test1.txt", "utf8", function (err, dataStr) {

    if(!err){
        console.log("file content is " + dataStr)
    }
})