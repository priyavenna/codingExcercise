var crypto = require("crypto");
var eccrypto = require("eccrypto");
 
// A new random 32-byte private key.
var privateKey = eccrypto.generatePrivate();
// Corresponding uncompressed (65-byte) public key.
var publicKey = eccrypto.getPublic(privateKey);
 
//fs node library for file read write
const fs = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);

const writeFile = promisify(fs.writeFile);
// var str = "message to sign";
// Always hash you message to sign!
async function fileHash(){

var readContent = await readFileAsync("SampleText","utf-8");

console.log(readContent);

var data = crypto.createHash("sha256").update(readContent).digest();
 console.log("Encrypted data ========= "+data)
let signature =  await eccrypto.sign(privateKey, data);

console.log("Signature with Encrypted data======== "+signature);
  eccrypto.verify(publicKey, data, signature).catch(function() {
    console.log("Signature is BAD");

});

//This function writes encrypted data to the file
await writeFile("SampleText",signature);
} 

fileHash().catch(error => console.error(error))
