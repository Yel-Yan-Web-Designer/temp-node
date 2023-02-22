//? GLOBAL NAMES - NO WINDOW!!

//? __dirname - path to current directory
//? __filename - file name
//? require - function to use modules (commonJS)
//? module - info about current module (file)
//? process - info about environment where the program is being executed


setInterval(() => {
    console.log('Helo node, run every one second but it was run last')
}, 1000);
console.log(__filename)
console.log('run second')
console.log(__dirname)
console.log(module)
console.log(process);
