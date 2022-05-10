const express= require ('express');
const bodyparser= require ('body-parser');
const request= require ('request');

const app = express();

app.use('/static', express.static('static'));

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/intropage.html");
})

app.post("/",(req,res)=>{
    res.sendFile(__dirname+'/sucessful.html');
})

app.listen(3000, function(){
    console.log("Your server is running on server 3000");
})