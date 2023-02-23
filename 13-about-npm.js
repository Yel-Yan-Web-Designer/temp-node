// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (for mac)

// focus on local is much more better

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc) // time consuming
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// After npm init -y, we will have package.json. Why we need this file?
// If we want to install local package, this file package.json will stored as dependency. Every local that we install will store in package.json file

// What is gitignore? It is a file that specifies which file will be ignored by the source control


// npm i nodemon -D
// What is nodemon and why we need it? It's no need nodemon in production
// we use nodemon why we are creating the app but once it's in production then we share the dependencies that actaully the ap is using not the ones that we used while we developed it.
// "dev" : "nodemon app.js" means nodemon is watching my app.js
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);



