const http = require('http')

const server = http.createServer();

server.on('request', function (req, resp) {

    //it could be bad showing.
    const str = `您请求的url是：${req.url}，您请求的方式是 ： ${req.method} `;

    //it could fix the bad showing.
    resp.setHeader('Content-type', 'text/html; charset=utf-8')
    resp.end(str);
})
server.listen(8081, function () {
    console.log("server running on 8081.")
})