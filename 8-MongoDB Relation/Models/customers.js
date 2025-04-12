const mongoose=require("mongoose");
//One To Many RelationShip
main().then((res)=>{
    console.log("Connection Succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testCustomer');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema=new mongoose.Schema({
    item:String,
    price: String,
});


const customerSchema=new mongoose.Schema({
    name:String,
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Order",
        },
    ]
});
customerSchema.post("findOneAndDelete",async (customers)=>{
    console.log("Pre MiddleWare Ecuted");
    //if(customers.orders.length!=0){
        // await Order.deleteMany({_id:{$in:customers.orders}});
        // console.log(customers+"After deleteion of orders");
   // }
})

customerSchema.post("findOneAndDelete", async function (customer) {
    console.log("Post Middleware Executed");
    // Now, you can perform additional operations after findOneAndDelete is completed.
    console.log("Deleted Customer:", customer);

    // For example, you can delete associated orders here.
    if (customer.orders.length !== 0) {
      await Order.deleteMany({ _id: { $in: customer.orders } });
      console.log("Orders deleted");
    }
});

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

// MiddleWare that trigger when findByIdAndDelete query excuted.this function trigger middleware consist of FindOneAndDelete function
//Place All middleWare after Models

// let result=  Order.insertMany([
//     {
//         item:"Chips",
//         price: 100,
//     },
//     {
//         item:"Choclates",
//         price: 200,
//     },
//     {
//         item:"Samosa",
//         price: 300,
//     },
//     {
//         item:"Chiska",
//         price: 400,
//     },
// ]);
// result.then((res)=>{
//     console.log(res);
// });
// Customer Iwth Old ORders have been created
async function viewcustomer(model) {
    let res = await model.find({}).populate("orders");
    console.log(res)
    // console.log(JSON.stringify(res, null, 2));
    
}
async function  addCustomer() {
    let customer1=new Customer({
        name:"Usama Saeed",

    });

    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({item:"Choclates"});

    customer1.orders.push(order1);
    customer1.orders.push(order2);

    customer1.save().then((res)=>{
        console.log(res);
    });

}
//Customer With New ORder Have Been Ceated
async function  addCustomerWithOrders() {
    let customer1=new Customer({
        name:"Huzaifa",

    });

    let order1=new Order({
        item: "Thanda Burger",
        price :350,
    })
    let order2=new Order({
        item: "KFC ZINGER",
        price: 300,
    })

    customer1.orders.push(order1);
    customer1.orders.push(order2);
    await order1.save();
    await order2.save();

    customer1.save().then((res)=>{
        console.log("New Customer With Orders Has been added");
    });

}

//delete Customer by ID
async function deleteCustomer(){
    let res=await Customer.findOneAndDelete({_id:"67e21a7443c8ce6924876198"});
    console.log("Deleted Customer"+ res);
}

deleteCustomer();
// addCustomerWithOrders();
// addCustomer();
// viewcustomer(Customer)