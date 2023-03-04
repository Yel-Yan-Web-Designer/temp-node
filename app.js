const { result } = require('lodash');
const fs = require('node:fs');

const readStream = fs.createReadStream('./contentForPath/streamA.txt', {
    encoding : 'utf-8',
    highWaterMark : 2
});
const writeStream = fs.createWriteStream('./contentForPath/streamB.txt');

readStream.on('data', (result) => {
    console.log(result)
    writeStream.write(result);
})