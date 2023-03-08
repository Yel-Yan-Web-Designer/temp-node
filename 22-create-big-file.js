const {writeFileSync} = require('fs');

for(let i = 0; i <= 10000; i++){
    writeFileSync(
        './contentForPath/bigtextfor22.txt',
        `Hello World ${i}\n`,
        {flag : 'a'}
    )
}
