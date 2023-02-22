const path = require('path');

console.log(path.sep);    // sep === seperator ---> \

const filePath = path.join('/contentForPath/', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'contentForPath', 'subfolder', 'test.txt'); // This is point to directory where test.txt is located
console.log(absolute);

console.log(path);