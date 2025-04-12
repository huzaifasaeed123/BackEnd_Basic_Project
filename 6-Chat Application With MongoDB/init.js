const Chat=require("./models/chat.js");
const mongoose = require('mongoose');



main().then((res)=>{
    console.log("DataBase Connection Succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats=[
    {
        from:"huzaifa",
        to:"Ammar",
        msg:"I love Coding",
        created_at:new Date(),

    },
    {
        from:"Zawar",
        to:"Bhatti",
        msg:"I love Pakistan",
        created_at:new Date(),

    },
    {
        from:"Anas",
        to:"Sana Ullah",
        msg:"I love England And Want to stay there",
        created_at:new Date(),

    },
    {
        from:"Dawood",
        to:"Ammar",
        msg:"Heelo How are you",
        created_at:new Date(),

    },
    {
        from:"Suleman",
        to:"Sadaq",
        msg:"We want to meet togrther Today",
        created_at:new Date(),

    },
];

Chat.insertMany(allchats)
.then((res)=>{
    console.log(res);
});

//Individual Chats Createion

// const data1= new Chat({

//   from:"HUzais",
//   to:"Ammar",
//   msg:"I love Coding",
//   created_at:new Date(),

// });

// data1.save()
// .then((res)=>{
//   console.log(res);
// });