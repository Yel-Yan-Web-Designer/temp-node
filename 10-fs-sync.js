//? fs built-in module file system work toghther with path
//? TWO main things ---> asynchronous fs non-blocking & synchronous fs blocking

// const fs = require('fs'); // original syntax
const {readFileSync, writeFileSync} = require('fs');  // destruture fs

console.log('START');
const first = readFileSync('./contentForPath/first.txt', 'utf-8')
const second = readFileSync('./contentForPath/second.txt', 'utf-8')

writeFileSync(
    './contentForPath/result-sync.txt', 
    `Here is the result ${first} & ${second}` , 
    {flag : 'a'}  // node will override everything and create new value and append that new value
);

const result = readFileSync('./contentForPath/result-sync.txt', 'utf-8');
console.log(result);
console.log('DONE WITH THIS TASK');
console.log('STARTING THE NEXT ONE');

 

