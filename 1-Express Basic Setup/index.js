const express = require('express')
const app = express();

const port =3000;
app.listen(port,function(){
    console.log("app Listening On Port ${post} ");

});

// app.use(function(request,response){
//     console.log("Request Recevied In Server");
// });

app.get("/",(req,res)=>{
    res.send("You Cantacted Root Path");
    console.log("You Cantacted Root Path");

});

//Query String
app.get("/Search", (req,res)=>{

    let obj =req.query;
    console.log(obj.q);
    res.send(`U have Searched String:: ${obj.q} \n  And the Name is ${obj.name} `);


});

//Path Paramenter
app.get("/:fruits/:fruitsid",(req,res)=>{
    
    res.send("Fruits Name: "+req.params.fruits+"\nFruits ID::"+req.params.fruitsid);

});


//Routing Path
app.get("/apple1",(req,res)=>{
    res.send("You Cantacted Apple Path");
    console.log("You Cantacted Apple Path");

});
app.get("/mango",(req,res)=>{
    res.send("You Cantacted Mango Path");
    console.log("You Cantacted Mango Path");

});
