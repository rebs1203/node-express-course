const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to my website</h1>')
    }
})

server.listen(3000);