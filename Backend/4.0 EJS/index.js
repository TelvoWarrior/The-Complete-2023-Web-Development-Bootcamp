import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var sentence = myMiddleware();
function myMiddleware() {
    var date = new Date();
    var today = date.getDay();
    console.log(`Today is ${today}`);
    if (today<=5) {
        sentence="Hey! It's a weekday, it's time to work hard!";
    } else {
        sentence="Hey! It's the weekend, it's time to have fun!";
    }
    return sentence;
};

app.get("/",(req,res)=>{
    res.render(__dirname+"/views/index.ejs",
    {sentence: sentence}
    );
});

app.listen(port,()=>{
    console.log(`Hello there! Server is running on port ${port}`)
});

