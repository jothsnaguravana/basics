import bodyParser from "body-parser";
import express from "express" ; 
import {dirname} from "path"; 
import { fileURLToPath } from "url";

const app = express(); 

const dir = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended : true}));

// app.get("/" , (req,res) => {
//     const today = new Date(); 
//     let day = today.getDay(); 
//     let dateType = "weekday"; 
//     let action = "lets work till 5"; 
//     if(day === 0 || day === 6) {
//         dateType = "weekend";
//         action = "lets party";  
//     }
//     res.render("index.ejs" , {dateType , action}   );
// }); 

app.get("/" , (req, res) => {
    // let found = 0;
    res.render("index.ejs"); 
})

app.post("/submit" ,(req,res) => {
    const found = 1; 
    const name = req.body["name"];
    const info = "The name you typed have " + name.length + " letters in it";
    res.render("index.ejs" , {found , info});
})

app.listen(3000 , () => {
    console.log("You are being served"); 
})