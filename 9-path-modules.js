const path = require('node:path');

console.log(path.sep);

//? the basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));


//? extname represent name of extension?
console.log(path.extname(filePath));
console.log(path.extname(__dirname)); // get empty string because it does not have dot name


 
//? parse return an object whose properties represent significant elements of the path ?
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename))); // will get original path string


//? isAbsolute whether a path is absolute or not, return boolean
console.log(path.isAbsolute(__filename)); 
console.log(path.isAbsolute('./data.json'));

//? join method
console.log(path.join('folder1', 'folder2', 'index.html'));
console.log(path.join('/folder1', 'folder2', 'index.html'));
console.log(path.join('/folder1', '//folder2', 'index.html'));
console.log(path.join('/folder1', '//folder2', '../index.html'));
console.log(path.join(__dirname, 'data.json')); // absolute path

//? resolve == give absolute
console.log(path.resolve('contentForPath', 'subfolder', 'test.txt'));
console.log(path.resolve(__dirname, 'contentForPath', 'subfolder', 'test.txt'));
console.log(path.resolve('/folder1', 'folder2', 'style.css'));
console.log(path.resolve('/folder1', '//folder2', 'style.css'));
console.log(path.resolve('/folder1', '//folder2', '/style.css'));
