const mongoose=require("mongoose");
//One To Millions RelationShip
main().then((res)=>{
    console.log("Connection Succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TestPosts');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
        username:String,
        email:String,

});

const postSchema=new mongoose.Schema({
    content:String,
    like: Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

async function addData(){
    // let user1=new User({
    //     username: "HUzaifaSaeed",
    //     email: "saeedhuzxaifa678@gnail.com",
    // });

    let user2=await User.findOne({username:"HUzaifaSaeed"});

    let post2=new Post({
        content:"I love Programming",
        like: 4000,

    });

    post2.user=user2;

   //await  user1.save().then((res)=>{console.log(res)});
   await post2.save().then((res)=>{console.log(res)});
}

addData();