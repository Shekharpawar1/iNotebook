const mongoose=require('mongoose'),
      express=require("express");

const connectToMongo =()=> {
    mongoose.connect("mongodb://localhost:27017/iNotebook   ",()=>{
        console.log("Connected to db")
})}

connectToMongo();
const app=express();
const PORT=3000 || process.env.PORT;
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })
// available routes
app.use("/api/auth/",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))



app.listen(PORT,()=>{
    console.log(`connected to the ${PORT}`)
})


