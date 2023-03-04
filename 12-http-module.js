const http = require('http');

// --This callback function will invoked or call everytime someone visits our server --//
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write(`<h1 style='color : red;'>Welcome To Home Page</h1><a href='/about'>About</a> <a href='/product'>Product</a>`);
        res.end();
    }  else if(req.url === '/about') {
        res.write(`<h1 style='color : blue;'>This is About Page</h1><a href='/'>Home</a>`);
        res.end();
    } else if(req.url === '/product'){
        res.write(`<h1 style='color : purple;'>Hello From product page</h1><a href='/'>Home Page</a>`);
        res.end()
    }  else {
        res.write(`<h1>Error!</h1><a href='/'>Back To Home Page</a>`);
        res.end()
    }
})
server.listen(5000, () => console.log('Server listens at localhost:5000'))