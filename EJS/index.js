import express from "express" ; 
import {dirname} from "path"; 
import { fileURLToPath } from "url";

const app = express(); 

const dir = dirname(fileURLToPath(import.meta.url));

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
    const today = new Date(); 
    let mins = today.getMinutes(); 
    const d = {
        title : "EJS tags", 
        mins : mins , 
        bag : ["apple" , "banana" , "mango"] , 
        htmlContent : "<em>Displaying html data</em>"
    };
    res.render("index.ejs" , {d});
})

app.listen(3000 , () => {
    console.log("You are being served"); 
})