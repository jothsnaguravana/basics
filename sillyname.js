const fs = require("fs"); 
const sillyname = require("sillyname"); 
// import generateName from "sillyname";

let name = sillyname(); 
console.log(name);

fs.writeFile("temp.txt" , "this is code generated file" , (err) => {
    if(err) throw err; 
    console.log("Successfully running");
})

fs.readFile("temp.txt" , 'utf-8' , (err, data) => {
    if(err) throw err; 
    console.log(data);
    console.log("Completd.....!");
})