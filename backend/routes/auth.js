const express=require("express");
const User = require("../models/User");
const router =express.Router();
//validator
const { body, validationResult } = require('express-validator');

router.post("/",[body("name","Min length of Name should be 3").isLength({min:3}),body('email',"Email is not valid ").isEmail(),body("password","password length should be 6 or more characters").isLength({min:6})],(req,res)=>{
    // const user=User(req.body)
    // user.save()
    // console.log(res.send(user))
    //validation returning error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    User.create({
       
        name:req.body.name,
        email:req.body.email,
        password: req.body.password,
      }).then(user => res.json(user)).catch((err)=>res.json({error:"please enter a new email"}));
    },
)


module.exports=router