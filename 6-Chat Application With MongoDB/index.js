const mongoose = require('mongoose');
const express=require("express");
const app=express();
const path =require("path");
const Chat=require("./models/chat.js");

const methodOverride = require('method-override');

app.use(methodOverride('_method'));


main().then((res)=>{
  console.log("DataBase Connection Succesful");
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//WrapASync Function as alternative to try-catch

function asyncWrap(fn) {
  return function (req, res, next) {
      fn(req, res, next).catch((err) => next(err));
  };
}




app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3030,()=>{
  console.log("Server Is Listning");
});

app.get("/chat",asyncWrap(async (req,res)=>{
  let allchats=await Chat.find();
  res.render("chats.ejs",{allchats})
  console.log("Received GET ALL CHATS REQUEST");
}));

app.get("/chat/new", (req,res)=>{
  res.render("newChat.ejs");
});

app.post("/chat",(req,res)=>{
  console.log(req.body);
    let data=new Chat({
    from: req.body.from,
    to: req.body.to,
    msg: req.body.msg,
    created_at: new Date(),
  });
  data.save()
  .then((res)=>{
    console.log(res);
    console.log("DATA SUBMITTED SUCCESFUULY IN DATABASE");
  });
  res.redirect("/chat");
});

app.get("/chat/:id/edit",asyncWrap(async(req,res)=>{
  let id=req.params.id;
  let editchat= await Chat.findOne({_id:id});
  res.render("edit.ejs",{editchat});
}));
//To Update Messagfe
app.put("/chat/:id",asyncWrap(async(req,res)=>{
  let id =req.params.id;

  //Also Use direct Method findByIdAndUpdate
   let updatedcaht= await Chat.findOneAndUpdate({_id:id},{msg:req.body.msg},{new:true});
   res.redirect("/chat");
   console.log(updatedcaht);

}));
//To Delete Message
app.delete("/chat/:id",asyncWrap(async (req,res)=>{
  let id=req.params.id;
  let deletemessage= await Chat.findByIdAndDelete(id);
  console.log(deletemessage);
  res.redirect("/chat");


}));
  app.get("/",(req,res)=>{
    res.send("ROOT Request Working");
});


