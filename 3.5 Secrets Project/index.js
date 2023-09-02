import bodyParser from "body-parser";
import express  from "express"; 
import {dirname} from "path"; 
import { fileURLToPath } from "url";
const app = express() 

const dir = dirname(fileURLToPath(import.meta.url)); 

app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , (req,res) =>{
    console.log("GEtting FiLe");
    res.sendFile(dir + "/public/index.html"); 
})

app.post("/check" ,(req,res) =>{
    let pwd = req.body["password"]; 
    console.log("PoStiNg the reSuLt");
    if(pwd === "Jothsna") {
        res.sendFile(dir + "/public/secret.html"); 
    }
    else {
        res.send(`<h1>${pwd} is not a valid password </h1>`);
    }
})

app.listen(3030 , () => {
    console.log("Running Successfully");
})