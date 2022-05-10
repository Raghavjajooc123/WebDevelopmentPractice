const express = require("express");
const bodyparser=require("body-parser");
const urlencodedparser= bodyparser.urlencoded({extended: false});
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post("/",urlencodedparser,(req,res)=>{
    first=req.body.first;
    second=req.body.second;
    first=Number(first);
    second=Number(second);
    var sum= first+second;
    res.send("The result is "+ sum);
})

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator",urlencodedparser,(req,res)=>{
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var bmi=h/(w*w)
    res.send("Your Body mass index is "+ bmi);
})

app.listen(3000, function(){
    console.log("your server is running on :- https://localhost:3000");
})