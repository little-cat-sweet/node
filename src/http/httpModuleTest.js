const http = require('http')
const server = http.createServer();
server.on('request', function (req, resp) {

    console.log("hello world.")
    
})
server.listen(8080, function () {
    console.log("server running on 8080.")
})