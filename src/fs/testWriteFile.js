const fs = require('fs');
fs.writeFile("test1.txt.txt", "长路慢慢，唯剑作伴,大大大，小小小，哆啦咪发索拉西",function (err, dataStr) {
    if(err){
        console.log(err)
    }else{
        console.log("write successfully ! ")
    }
})