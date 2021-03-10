let fs = require("fs");
let path = require("path");


function isFileorNot(dirpath){
    return fs.lstatSync(dirpath).isFile();//returns boolean value whether it is file or folder it is a async function that is it does not works parallely it waits for it to commplete
}

function removeLinebreak(path){
    if(isFileorNot(path)){
        let buffer = fs.readFileSync(path);
        let s = buffer.toString();
        console.log(s.replace(/(\r\n|\r|\n){2,}/g, '$1\n'));//regex for removing multiple line breaks
    }else{
        console.log("oops its not a file");
    }
}

module.exports = {
    linebreakfn:removeLinebreak
}