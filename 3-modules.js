///? Node uses CommonJs Library,in node every file is module (by default)
//? Modules - Encapsulated Code (only share minimum or only share what we want)
const {john , susan} = require('./4-names');
const greet = require('./5-ultis');
const data = require ('./6-alternative-flavor');
require('./7-mind-grenade'); // mind grenade happen cux of module
// greet(john)
// greet(susan)
// greet(data.singlePerson.name)
// console.log(data.items[1])
// console.log(data)