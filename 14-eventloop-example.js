const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World')
})
server.listen(4000, () => console.log('server listens first'));