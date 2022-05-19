const jwt=require("jsonwebtoken");

const JWT_SECRET="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum quis leo vel rhoncus. Praesent felis mi, accumsan venenatis scelerisque sit amet, sodales in erat. In dapibus vel velit sodales commodo. Maecenas mollis enim non elit vulputate, eget maximus turpis tempus. Pellentesque justo ex, facilisis id purus eu, dictum vestibulum mi. Suspendisse neque ante, dictum eu lacus at, hendrerit dapibus arcu. Mauris aliquam mauris at lacus convallis tristique. Donec in ex sapien. Sed luctus dignissim efficitur. Nunc rutrum sapien vitae scelerisque mollis. Etiam pellentesque nec nulla ac faucibus. Nulla a nisl tellus. Aliquam sed nisl non dui consectetur sagittis. Proin lectus neque, vestibulum eu aliquet sed, viverra at nulla. Nam facilisis, tellus sed dignissim tincidunt, neque lacus lobortis felis, elementum scelerisque quam sem at augue. Sed sed eros felis. "

const fetchUser=(req,res,next)=>{
    const token=req.header("auth-token");
    if(!token){return res.status(401).send({error:"Please authenticate using valid token"}) }



    try{
         const data=jwt.verify(token,JWT_SECRET);
         req.user=data.user;
    }catch(error){
        res.status(401).send({error:"Please authenticate using valid token"})
    }
}

module.exports=fetchUser;