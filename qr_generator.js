import inquirer from "inquirer";
import fs from "fs"; 
import qr from "qr-image";
// https://clone1react.pages.dev/
inquirer
  .prompt([
     {
        message : "Type a URL" ,
        name: "URL",
     },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!! 
        const url = answers.URL ;
        var qr_img = qr.image(url);  
        qr_img.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });