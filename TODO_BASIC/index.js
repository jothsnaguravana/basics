import express from "express" ;  
import bodyParser from "body-parser";  


const app = express(); 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended : true}));  

const items = ["do something ", "never say no"] ; 

app.get("/" ,(req,res) => {
    res.render("index.ejs" ,{items}); 
}) 



app.post("/insert" , (req ,res) => { 
    const item = req.body["item"];
    items.push(item); 
    const n = items.length; 
    console.log(n);
    res.render("index.ejs" ,{items}); 
}) 

app.post("/delete/:index" , (req,res) => { 
    const b = req.params.index; 
    // console.log(b);
    items.splice(b,1) ;
    res.render("index.ejs" ,{items});
})


app.listen( 3000 , () => {
    console.log("You are being served"); 
})