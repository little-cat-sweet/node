const path = require("path")

const testPath = "/a/b/d/s/index.html";

//This could get the path of the parameters. And we usually use the method of path to get directory.
const basePath1 = path.join(testPath)
console.log("basePath1 : " + basePath1)
const basePath2 = path.join("a", "./f/g", "../" , "d");
console.log("basePath2 : " + basePath2)

//This could get the file's name and ignore directory.
const fileName = path.basename(basePath1);
console.log("fileName : " + fileName)
const fileNameWithoutExtension = path.basename(basePath1, '.html')
console.log("fileNameWithoutExtension : " + fileNameWithoutExtension)

const extentName = path.extname(basePath1);
console.log("extentName" + extentName)