// const mongoose =require("mongoose");


// const connectToMongo=()=>{
//     mongoose.connect("mongodb://localhost:27017/",()=>{
//         console.log("Connected to db")
//     })
// }

// module.export=connectToMongo;
const connectToMongo=require("./index")


connectToMongo()