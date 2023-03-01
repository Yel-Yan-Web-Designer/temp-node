const {readFile} = require('fs');

function getText (path) {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', ((err, data)=> {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        }))
    })
}

const start = async () => {
    const first = await getText('./contentForPath/first.txt');
    const second = await getText('./contentForPath/second.txt');

    console.log(first, second);
}
start();