const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./contentForpath/bigtextfor22.txt', 'utf-8');
    // res.end(text)
    const filereadstream = fs.createReadStream('./contentForPath/bigtextfor22.txt', 'utf-8');
    filereadstream.on('open', () => {
        filereadstream.pipe(res)
    })
    filereadstream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000);

/*
What is pipe?
- It is a method pushing from read stream into write stream 
- If we can read datat in chunk, we can also write data in chunk

What happen under the hood of pipe?
- res object can be set up as a writebale stream

So, the process is
- We have our file stream, that is a read stream
- We have method of pipe, so we are piping it into writable stream 
- And now I will pass my res object
- Go to browser and refresh and check network => localhost => transfer as chunks
*/