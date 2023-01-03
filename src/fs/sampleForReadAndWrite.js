
const fs = require('fs')
fs.readFile('test2.txt', 'utf8', function (err, dataStr) {
    if(! err){
        console.log("load information : " + dataStr)
        let str = dataStr;
        console.log("str : " + str)
        let arr = []
        arr = str.split(" ");
        console.log("first arr : " + arr)
        arr.forEach(value => {
            arr.push(value.replace("=", ":"))
        })
        let resStr = arr.join("\t\n");
        console.log("resStr : " + resStr)
        fs.writeFile("test3.txt", resStr, function (err) {
            if(! err){
                console.log("load successfully ! ");
            }else{
                console.log(err)
            }
        })
    }
})