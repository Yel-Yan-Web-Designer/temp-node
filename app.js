const {readFile} = require('fs').promises;

async function start () {
    const first = await readFile('./contentForPath/first.txt', 'utf-8');
    const second = await readFile('./contentForPath/second.txt', 'utf-8');
    console.log(first, second);
}
start()