const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);

var newContent = "function add() { let a =1; b=2; let c=a+b; console.log(\"value of a+b is\"+c)} add();"
var readContent;

//This function will create a file with given content in variable new content and read the content
async function readWrite() {
    await writeFile("sample.js",newContent);

    console.info("file created successfully with promisify and async/await!");

    readContent = await readFileAsync("sample.js","utf-8");
    console.log(readContent);

    await check();
}

readWrite().catch(error => console.error(error))

function check()
{
    //compares content written and read from the file are same
    if(newContent == readContent)
    console.log("read and write content are same")
}


