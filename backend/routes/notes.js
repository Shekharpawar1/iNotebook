const express=require("express");
const { body,validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const router =express.Router();





router.get("/fetchallnotes",fetchUser,async (req,res)=>{
    try{
    const notes=await Notes.find({user:req.user.id});
    res.json(notes)
    }
    catch(error){
        res.status(500).send({error:"Internal server error"})
    }
})

//route 2 for adding note
router.get("/addnotes",fetchUser,[body('title',"title should be 4 or more character").isLength({min:4}),body('title',"title should be 5 or more character").isLength({min:5})],async (req,res)=>{
    const {title,description,tag }=req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        })}
    try{
        const note=new Notes({title,description,tag,user:req.user.id});
        const savedNote=await note.save();
        res.json(savedNote);
    }catch(error){
        res.status(500).send({error:"Internal server error"})
    }
    
})

module.exports=router
