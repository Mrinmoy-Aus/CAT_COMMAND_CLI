let fs = require("fs");
let path = require("path");

function isFileorNot(dirpath){
    return fs.lstatSync(dirpath).isFile();//returns boolean value whether it is file or folder it is a async function that is it does not works parallely it waits for it to commplete
}

function readFile(path){
    let buffer = fs.readFileSync(path);
    return buffer.toString();
}

function display(path){

    if(isFileorNot(path)){
        console.log(readFile(path))
    }else{
        console.log("oops its not a file");
    }

}

function toDisplay(input){
    if(input.length==1){
        display(input[0])
    }else{
        for(let idx=0;idx<input.length;idx++){
            display(input[idx])
            console.log("---------------------------------***********************---------------------------------------")
        }
    }
}

module.exports = {
    displayfn:toDisplay
}



