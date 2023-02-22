const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write(`<h1 style='color : red;'>Welcome To Home Page</h1>`);
        res.end();
    }  else if(req.url === '/about') {
        res.write(`<h1 style='color : blue;'>This is About Page</h1>`);
        res.end();
    } else if(req.url === '/product'){
        res.write(`<h1 style='color : purple;'>Hello From product page</h1>`);
        res.end()
    }  else {
        res.write(`<a href='/'>Back To Home Page</a>`);
        res.end()
    }
})
// server.listen(5000);