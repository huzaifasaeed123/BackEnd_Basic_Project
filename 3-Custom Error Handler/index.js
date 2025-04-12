const express=require("express");
const app=express();

const ExpressError= require("./ExpressError")

//WrapASync Function as alternative to try-catch
//I have used this function in Chat Application taht link with mongoose database
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(3030,()=>{
  console.log("Server Is Listning");
});

app.get("/",(req,res)=>{
    //The following Line cause Occur the error,so this error will generate And handle by our Custom Middleware,
    //But That middleware err parameter have only error message
    abcd=abcd;
    // res.send("ROOT Request Working");
});
app.get('/custom_Error',(req,res)=>{
    //Sendig Our Custom Error
    throw new ExpressError(403,"Access Forbidden")
})

app.use((err,req,res,next)=>{
    console.log(err.message)
    //The err parameter have only error.message if its create by express app
    //so set the status also by default
    //The Error parameter have status and message if we throw it by CustomClass Error
    //So in both cases,we have error.message but only have status in one cases,so default value will use
    let {status=500,message}=err;
    console.log("I am handling");
    //The following line mean we are handling this error at our end
    res.status(status).send(message);
    //The Following Line will able to send response by default error handler,so we dont want this,we want to handle in our hand
    // next(err)
})
