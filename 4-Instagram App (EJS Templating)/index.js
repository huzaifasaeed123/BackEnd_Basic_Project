const express=require("express");
const app=express();
const path=require("path");

app.listen(3000,()=>{
    console.log("Server Started");
});
// Basic Function To Serve Static  Public Folder Files as complete project

app.use(express.static(path.join(__dirname,"/public/CSS")));
app.use(express.static(path.join(__dirname,"/public/JS")));

//Setting the View Engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
//Instagram EJS Search Operation

app.get("/ig/:username",(request,response)=>{
    console.log("Request Recieved");
    // let arrayName=["HUzaifa","Ali","Ammar","BASit"];
    let username1=request.params.username;
    const insta_data=require("./data.json");
    const data=insta_data[username1];
    if(data){
        response.render("instagram.ejs",{search_data:data});
    }
    else{
        response.render("error.ejs");
    }
    
});

app.get("/dice",(req,res)=>{
    
    let rolldice=Math.floor((Math.random()*6)+1);
    console.log(rolldice);
    
    res.render("rolldice.ejs",{rolldice});
});

app.get("./",(req,res)=>{
    app.render();
});

