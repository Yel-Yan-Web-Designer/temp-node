const http = require('http');


//? --This callback function will invoked or call everytime someone visits our server which mean everytime the request comes in  --?//
// const server = http.createServer((req, res)=> {
//     res.end('<h1>WELCOME</h1>')
// })


/*
? -This is another way by using EventEmitter api 
? - First, import http module
? - Second, create http.createServer()
? - But instead of passing in the callback function like the old method, server has the method "on"
? - we will listen for 'request' event and then it will invoke callback function 
? - The reason we can use 'on' method without importing eventEmitter is beacause http.createServer has the ability to listen for 'request' events
? - So, this event will emitted every time there is a request which mean when someone visit our website
*/


// Using EventEmitter API
const server = http.createServer();
//emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res)=> {
    res.end('<h1>WELCOME</h1>')
})

server.listen(2000, () => console.log(`Server runs at local host 2000`));