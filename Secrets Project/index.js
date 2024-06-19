import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

var isAuth = false;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

function checkAuth(req, res, next) {    
    if(req.body["password"] === "ILoveProgramming"){
        isAuth  = true;
    }
    next();
}

app.use(checkAuth);

app.post("/check", (req, res) => {
    if(isAuth){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port , () => {
    console.log("Server up and running on port 3000");
})
