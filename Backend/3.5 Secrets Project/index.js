import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

function isPasswordValid(req) {
    if(req.body.password == "iLoveProgramming"){
        return true;
    }
    return false;
}
app.use(isPasswordValid);

function submitRedirect(req, res, next) {
    if(isPasswordValid(req)){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html")
    }
    next();
}
app.use(submitRedirect);


app.post("/check", (req, body) =>{
    res.send(submitRedirect());
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () =>{
    console.log(`System listening on port ${port}`);
});