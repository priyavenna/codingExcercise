
var crypto = require('crypto');

var fs = require('fs');

//reads file and content will be loaded to variable assigned to it
var read_content = fs.readFileSync('SHA.txt', 'utf8' );

console.log(read_content);

//hashes data according to sha256
var sha256data = crypto.createHash('sha256').update(read_content).digest("hex");

console.log(`sha256 of sample.txt is ${sha256data}`);//prints encrypted data on console

fs.writeFileSync('sha256.enc', sha256data , 'utf-8');//writes encrypted to sha256.enc