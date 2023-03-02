//GET BACK THE CLASS
// IF WANT CUSTOM EXTEND FROM CLASS
// OTHERWISE JUST FOR EMITTING AND HANDLING EVENTS CREATE INSTANCE
const EventEmitter = require('node:events');

const customEmitter = new EventEmitter();

// ON AND EMIT METHODS
// KEEP TRACK OF THE ORDER
// ADDTIONAL ARGUMENTS
// BUILT-IN MODULES UTILIZE IT


// LISTEN FIRST AND THEN EMIT LATER
customEmitter.on('response', (name , age) => {
    console.log(`Data received from ${name} ${age}`);
})
customEmitter.on('response', (name, age) => {
    if(age < 18){
        console.log(`Sorry ${name} you are not allowed to enter this website due to our age restriction policy`);
    }
})

// EMIT LATER
customEmitter.emit('response', 'Yel Yan', 14);