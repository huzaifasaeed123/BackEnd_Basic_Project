const express=require("express");
const app=express();
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));

let posts=[
    {
        id:uuidv4(),
        username: "HUzaifa",
        content: "I love Coding"
    },
    {
        id:uuidv4(),
        username: "Ammar",
        content: "I love Coding"
    },
    {
        id:uuidv4(),
        username: "Bhaatti",
        content: "I love Coding"
    },
]

app.listen(3000,()=>{
     console.log("Server Has Been Started");
});

app.get("/",(req,res)=>{
    res.send("Server Woking Well");

});



app.get("/post",(req,res)=>{
    res.render("post.ejs",{posts});
});
app.post("/post",(req,res)=>{
    // let username=req.body.username;
    // let content=req.body.content;
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});

    // res.render("post.ejs",{posts});

    //use Redirect Insted of again render same page
    res.redirect("/post");
});
app.get("/post/new",(req,res)=>{
    res.render("form.ejs");
});

app.get("/post/:id",(req,res)=>{
    let id=req.params.id;
    let singlepost=posts.find((eachpost)=> {
        return eachpost.id==id;
    });
    console.log(singlepost);
    res.render("singlepost.ejs",{singlepost});
});
app.get("/post/:id/edit",(req,res)=>{
    let id=req.params.id;
    let singlepost=posts.find((eachpost)=> {
        return eachpost.id==id;
    });
    console.log("Edit Request Has been Received For "+ singlepost);
    res.render("edit.ejs",{singlepost});

});
app.patch("/post/:id",(req,res)=>{
    let id=req.params.id;
    let newContent=req.body.content;
    let editpost=posts.find((eachpost)=> {
        return eachpost.id==id;
    });
    editpost.content=newContent;
    res.redirect("/post");

});

app.delete("/post/:id",(req,res)=>{
    let id=req.params.id;
    // array = posts.filter(item => JSON.stringify(item) !== JSON.stringify(deletepost));
    //Alternative Approach (When condition false then those item will not store,so it will filter)
    posts=posts.filter((n) => {
        return id!=n.id;

    });
    res.redirect("/post");

});
