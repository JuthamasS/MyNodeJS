//console.log("hello! node.js")
//let a = 5;
////let b = 4;
//console.log(a + b);
//const fs = require('fs');
//fs.writeFileSync('data.txt','Hello, Node.js App!');

const { getSecretKey , databaseName } = require('./settings');
console.log(getSecretKey());
console.log(databaseName);


const myObject = require('./settings');
console.log(myObject.getSecretKey());
console.log(myObject.databaseName);