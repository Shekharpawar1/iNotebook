const express=require("express")
const router =express.Router();




router.get("/",(req,res)=>{
    res.send("notes available")
})

module.exports=router