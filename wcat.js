//display
//multiple display
//remove line break -s
//number to all lines -n
//numbering to non empty lines -b
let displayobj = require('./display')
let linebreakobj = require('./lineBreak')
let numberingobj = require('./number')
let helpobj = require('./help')

let input = process.argv.slice(2);


let cmd = input[0];


if(cmd!="-n" && cmd!="-s" && cmd!="-b" && cmd!="-help"){
    //display
    displayobj.displayfn(input)
}else if(cmd=="-s"){
    //remove line break
    if(input[1]=="-n"){
        linebreakobj.linebreakfn(input[2])
        numberingobj.numberfn(input[1],input[2])
    }else if(input[1]=="-b"){
        linebreakobj.linebreakfn(input[2])
        numberingobj.numberfn(input[1],input[2])
    }else{
        linebreakobj.linebreakfn(input[1])
    }
}else if(cmd=="-n"){
    //number all lines
    if(input[1]=="-s"){
        numberingobj.numberfn(cmd,input[2])
        linebreakobj.linebreakfn(input[2])
    }else if(input[1]=="-b") {
        numberingobj.numberfn(cmd,input[2])
    }else{
        numberingobj.numberfn(cmd,input[1])
    }
}else if(cmd=="-b"){
    //number non empty lines
    if(input[1]=="-s"){
        numberingobj.numberfn(cmd,input[2])
        linebreakobj.linebreakfn(input[2])
    }else if(input[1]=="-n"){
        numberingobj.numberfn(cmd,input[2])
    }else{
        numberingobj.numberfn(cmd,input[1])
    }
}else if(cmd=="-help"){
    helpobj.helperfn()
}else{
    console.log("Wrong command enter please see help")
}

