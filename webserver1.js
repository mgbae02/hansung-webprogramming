const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h1>Hi! My Name is Min-Gyu</h1>");
    res.end("<h1>Hello world !</h1>");
})

server.listen(1000, () => {
    console.log("server listens on port 1000 !");
})