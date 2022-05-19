const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
//validator
const {
  body,
  validationResult
} = require('express-validator');
const fetchUser = require("../middleware/fetchUser");
const JWT_SECRET="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum quis leo vel rhoncus. Praesent felis mi, accumsan venenatis scelerisque sit amet, sodales in erat. In dapibus vel velit sodales commodo. Maecenas mollis enim non elit vulputate, eget maximus turpis tempus. Pellentesque justo ex, facilisis id purus eu, dictum vestibulum mi. Suspendisse neque ante, dictum eu lacus at, hendrerit dapibus arcu. Mauris aliquam mauris at lacus convallis tristique. Donec in ex sapien. Sed luctus dignissim efficitur. Nunc rutrum sapien vitae scelerisque mollis. Etiam pellentesque nec nulla ac faucibus. Nulla a nisl tellus. Aliquam sed nisl non dui consectetur sagittis. Proin lectus neque, vestibulum eu aliquet sed, viverra at nulla. Nam facilisis, tellus sed dignissim tincidunt, neque lacus lobortis felis, elementum scelerisque quam sem at augue. Sed sed eros felis. "
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
    //hashing password
    //this would create a salt which would be stored in the db
    const salt=await bcrypt.genSalt(10),
    //with the help of the salt the below line would hash the password
          hashedPassword= await bcrypt.hash(req.body.password,salt);
    user =await User.create({

      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })
    // .then(user => res.json(user)).catch((err) => res.json({
    //   error: "please enter a new email" }
    // ));
    const data={user:{id:user.id}};
    let  authtoken = jwt.sign(data, JWT_SECRET);
    res.send(`authtoken:${authtoken}`)
  }catch(err){
    console.log(err);
    return res.status(500).json(" Internal Server error")
  }
})






//sign up route
router.post("/signUp", [body('email', "Email is not valid ").isEmail(), body("password", "enter correct credentials").exists()], async (req, res) => {
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
  const {email,password}=req.body;
  try{
    let user = await User.findOne({
      email});
    if (!user) {
      return res.status(400).json({
        errors: "Enter Correct Credentials"
      })
      }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare){return res.status(400).json({
      errors: "Enter Correct Credentials"
    })}
    const payload={user:{id:user.id}}
    let  authtoken = jwt.sign(payload, JWT_SECRET);
    res.send(`authtoken:${authtoken}`)
  }catch(err){
    console.log(err);
    return res.status(500).json(" Internal Server error")
  }
})



//getUser route
router.post("/getUSer", fetchUser, async (req, res) => {
  
  try{
   let  userId=req.user.id;
    let user = await User.findOne({
      userId}).select("-password");
    res.send(user)
  }catch(err){
    console.log(err);
    return res.status(500).json(" Internal Server error")
  }
})

module.exports = router;