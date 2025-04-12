const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const path = require("path");
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_practice',
    password: 'saeed123',
});
app.listen(3030, () => {
    console.log("Server Has Been Started");
});


//Home Route To view overall User In Our Database
app.get("/", (req, res) => {
    let q = "select count(email) from user";
    connection.query(q, (err, result) => {
        if (err) throw err;
        // let result2=result[0]["count(*)"];
        console.log(result);
        //res.send("Request Recived And Total Number Of Users:: "+result);
        res.render("home.ejs", { result });
    });
});
//Route to Display All User Information 
app.get("/user", (req, res) => {
    console.log("Home Get Request Recieved");
    try {
        let q = "select id,username,email from user";
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("user.ejs", { result });
        });
    }
    catch (err) {
        res.send("Error Has Been Occur");
        console.log(err);
    }
});

app.get("/user/:id/edit", (req, res) => {
    console.log("Edit Get Request Recieved");
    let id = req.params.id;
    let q = `select * from user where id="${id}"`;
    try {
        connection.query(q,(err, result) => {
            if (err) throw err;
            console.log(result);
            res.render("edit_username.ejs", { result });
        });

    }
    catch (err) {
        console.log(err);
        res.send("Error Has Beeen Occur While Getting Data From Database");
    }

});

app.patch("/user/:id", (req, res) => {
    console.log("Patch Update Request Recieved");
    let id = req.params.id;
    let password = req.body.password;
    let username = req.body.username;
    try {

        let updatedarray = [username, id, password];
        let updatequery = "update user set username=? where id=? AND password=?"

        connection.query(updatequery, updatedarray, (err, result) => {
            console.log(result)
            if(result.affectedRows==1)
            {
                console.log("UPdated Successfully");
                res.redirect("/user");
            }else{
                res.send("Wrong password");
                
            }
            

        });

    }
    catch (err) {
        console.log(err);
    }

});
app.delete("/user/:id",(req,res)=>{
    let q= "delete from user where id=?";
    id=req.params.id;
    try{
        connection.query(q,[id],(err,result)=>{
            if(result.affectedRows==1){
                console.log("UPdated Successfully");
                res.redirect("/user");
            }
        })
    }
    catch (err) {
        console.log(err);
    }

})

//Random User Creataion By faker,it will return an object containg all values
let createRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}
//Random User Creataion By faker,it will return an Array containg all values
let createRandomUserArray = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}



//Enter Single Row Data
// let q="insert into user (id,username,email,password) values (?,?,?,?)";
// let arr=[123,"usera","randoma@gmail.com","pas123a"];
// try{
//     connection.query(q,arr,(err,result)=>{
//         if(err) throw err
//         console.log(result);
//     });
// }
// catch(err){
//     console.log(err);
// }
//Enter Multiple Rows
// let q="insert into user (id,username,email,password) values ?";
// let arr=[];
// for(let i=0;i<=100;i++){
//    arr.push(createRandomUserArray());
// }
// try{
//     connection.query(q,[arr],(err,result)=>{
//         if(err) throw err
//         console.log(result);
//     });
// }
// catch(err){
//     console.log(err);
// }



//console.log(createRandomUser());
// connection.end();
