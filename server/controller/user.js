const asyncHandler = require("express-async-handler");
const User = require("../model/user")
const generateToken = require("../config/generateToken")

const registerUser= asyncHandler(async (req, res) => {
    const {name, email, password, image}= req.body
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the Fields")
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({name,email, password, image})
    console.log(user)
    if(user._id){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            image:user.image,
            token: generateToken(user._id)
        })
    }else{
        res.status(400);
        throw new Error("Failed to create the new user")
    }

})

const authUser= await User.findOne(async(req, res)=>{
    // if(user)
})

module.exports= {registerUser}