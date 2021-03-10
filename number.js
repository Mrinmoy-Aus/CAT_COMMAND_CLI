let fs = require("fs");
let path = require("path");
let line = require('readline');

function isFileorNot(dirpath){
    return fs.lstatSync(dirpath).isFile();//returns boolean value whether it is file or folder it is a async function that is it does not works parallely it waits for it to commplete
}

function giveNumberingAll(path){
    if(isFileorNot(path)){
        let idx = 1
        var lineReader = line.createInterface({
            input: fs.createReadStream(path)
          });
          
          lineReader.on('line', function (line) {
            console.log(idx+line);
            idx++
          });
    }else{
        console.log("oops its not a file")
    }
}

function giveNumbering(path){
    if(isFileorNot(path)){
        let idx = 1
        var lineReader = line.createInterface({
            input: fs.createReadStream(path)
          });
          
          lineReader.on('line', function (line) {
            if(line!=""){
                console.log(idx+line);
                idx++
            }else{
                console.log(line);
            }
          });
    }else{
        console.log("oops its not a file")
    }
}


function numbering(mode , path){
    if(mode=="-n")
    {
        giveNumberingAll(path)
    }else if(mode=="-b"){
        giveNumbering(path) 
    }
}

module.exports={
    numberfn:numbering
}