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


//route 3 for notes updation
router.post("/updatenotes/:id",fetchUser,async(req,res)=>{


const {title,description,tag}=req.body;
try{
const newNote={};
if(title) {
newNote.title=title;}
if(description){ 
newNote.description=description;}

if(tag) {
newNote.tag=tag;}
///finding the note by id

let note= await Notes.findById(req.params.id);
if(!note) res.status(400).send("not found")
if(note.user.toString()!==req.user.id) res.status(401).send("Unauthorized")
note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
res.json(note)}
catch(error){
    res.send(500).send("Internal Server Error")
}
})


//route4 deletion of the note
router.delete("/deletenotes/:id",fetchUser,async(req,res)=>{


//     const {title,description,tag}=req.body;
    
    ///finding the note by id
    try{
    let note= await Notes.findById(req.params.id);
    if(!note) res.status(400).send("not found")
    if(note.user.toString()!==req.user.id) res.status(401).send("Unauthorized")
    note=await Notes.findByIdAndDelete(req.params.id)
    res.json("success")}
    catch(error){
        res.status(500).send("Internal Server Erro")
    }
    })


module.exports=router
