const {readFile, writeFile} = require('fs');

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    const first = await readFilePromise('./contentForPath/first.txt', 'utf-8');
    const second = await writeFilePromise('./contentForPath/promise.txt', 'Testing util module using promisify function! from 17-fs-async.promise3.js file.');
    const third = await readFilePromise('./contentForPath/promise.txt', 'utf-8')
    console.log(first, third);
}
start()