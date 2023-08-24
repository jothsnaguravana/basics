import bodyParser from "body-parser";
import express from "express"; 
import http from "http"; 
import { dirname } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url))

const app = express(); 

app.use(bodyParser.urlencoded({extended : true})); 

app.get("/" ,(req ,res) => {
    console.log(dir) 
    res.sendFile(dir + "/index.html");
    console.log(req.rawHeaders)
})

app.post("/submit" , (req ,res) => {
    console.log(req.body); 
})

app.listen(3030 , () => {
    console.log("Running Successfully"); 
}) 

// or 

// http.createServer(function (req , res) {
//     res.write("HI , THis is another method") ; 
//     res.end(); 
// }).listen(3030); 