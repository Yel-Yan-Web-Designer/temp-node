/*
? WE USE READFILE AND WRITEFILE MOSTLY FOR
? READING FROM THE DATABASE & WRITING TO THE DATABASE
? INSTEAD OF CALLBACK HELL WE WILL USE PROMISE AND AYNC AWAIT SYNTAX
*/

const {readFile, writeFile} = require('fs');

console.log('START');

readFile('./contentForPath/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./contentForPath/second.txt', 'utf-8', (err,result ) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

    writeFile(
        './contentForPath/result-async.txt',
        `Here is the final result : ${first} & ${second}`,
        {flag : 'a'},
        (err, result) => {
            if(err){
                console.log(err);
                return
            }
        const third = result;
    readFile('./contentForPath/result-async.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        console.log(result);
        console.log('DONE WITH THIS TASK');
    })
        }
    )
    })
})

console.log('STARTING NEXT TASK');