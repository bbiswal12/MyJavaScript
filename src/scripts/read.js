// var fs= require("fs");
// var data=fs.readFileSync("help.txt");
// console.log(`Reading Started`);
// console.log(data.toString());
// console.log(`Read Complete`);



// var fs=require("fs");
// console.log(`Reading Started`);
// fs.readFile("help.txt",function(err,data){
//     if(!err){
//         console.log(data.toString());
//     }else{
//         console.log(err);
//     }
// })
// console.log(`Read Complete`);




var fs=require("fs");
console.log("Reading started");
fs.readFile("help.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
})
console.log("Reading Complete");