const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt=require("bcrypt");
//validator
const {
  body,
  validationResult
} = require('express-validator');

router.post("/createUser", [body("name", "Min length of Name should be 3").isLength({
  min: 3
}), body('email', "Email is not valid ").isEmail(), body("password", "password length should be 6 or more characters").isLength({
  min: 6
})], async (req, res) => {
  // const user=User(req.body)
  // user.save()
  // console.log(res.send(user))
  //validation returning error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  try{
    let user = await User.findOne({
      email: req.body.email
    });
    if (user) {
      return res.status(400).json({
        errors: "Email is already registered"
      })
    }
    const salt=await bcrypt.genSalt(10),
          hashedPassword= await bcrypt.hash(req.body.password,salt);
    user =await User.create({

      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })
    // .then(user => res.json(user)).catch((err) => res.json({
    //   error: "please enter a new email" }
    // ));
    res.send(user)
  } catch(err){
    console.log(err);
    return res.status(500).json(" Internal Server error")
  }
})

module.exports = router;