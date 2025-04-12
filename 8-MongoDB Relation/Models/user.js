const mongoose=require("mongoose");
//One To Few RelationShip
main().then((res)=>{
    console.log("Connection Succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    username: {
        type:String,
    },
    address:[
        {location:String, City:String},
    ]
});

const User=mongoose.model("User",userSchema);

const user1=new User({
    username:"HUZaifa Saeed",
    address:[
        {location:"Street 2",city:"Lahore"},
        {location:"Street 3",city:"Islamabad"},
    ]
});

user1.save().then((res)=>{
    console.log("Data Succesfull Submitted");
});
