const http = require('http')
const server = http.createServer();
server.on('request', function (req, resp) {

    //could get the url from the req.
    const url = req.url;
    //could get the req method from the req.
    const method = req.method;
    let responseMessage = "url : " + url + ", and method is " + method;

    //response to the req.
    resp.end(responseMessage)
})
server.listen(8080, function () {
    console.log("server running on 8080.")
})