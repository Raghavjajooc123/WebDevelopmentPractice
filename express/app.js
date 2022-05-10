const express=require("express");
const path=require("path");
const app=express();
const port=800;
app.use('/static',express.static('static'))

app.set('view engine','pug');

app.set('views',path.join(__dirname, 'template'));

app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:"raghav",message:"hi there"})
});

app.get("/",(req,res)=>{
    res.send("this is home");
});

app.get("/about",(req,res)=>{
    res.send("this is about");
});

app.post("/about",(req,res)=>{
    res.status(400).send("this is about using post request");
});

app.listen(port, ()=>{
    console.log(`the webpage is being ran on port ${port}`)
});
