const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')




// register new user
// POST /api/v1/users
const registerUser = asyncHandler(async(req, res) => {
  
        // grab the data from the request body
        try{
            const {
                lastName,
                firstName,
                email,
                password,
                confirmPassword,
                gender,
                role
            } = req.body;

            // check fields 
            if(!lastName || !gender || !firstName || !email || !password || !confirmPassword ||!role ){
                return res.status(400).json({error:"Please add all fields"})
            }

            if(password !== confirmPassword || password.length < 6 ){
                return res.status(400).json({error: "Passwords do not match and should be at least 6 characters"})
            }
            
            // check if the user is already sign in 
            const userExist = await  User.findOne({ email })
            if(userExist){
                return res.status(400).json({error : "Invalide email!"})
            }

            // Hash password
            const salt = await bcrypt.genSalt(10) // add an extra data to the user password
            const hashedPassword = await bcrypt.hash(password, salt) // merge the hashed pass to the salt
    
            // create new User
            const newUser = await User.create({
                lastName,
                firstName,
                email,
                password: hashedPassword,
                gender,
                role
            })
            if(newUser){
                    res.status(200).cookie("token", generateToken(newUser._id,newUser.firstName, newUser.lastName, newUser.email )).json(newUser)
            } 
        }catch(error){
            return res.status(500).json({error : "somthing went wrong"})
        }
})

// login a user
// POST /api/v1/users/login
const loginUser = asyncHandler(async(req,res)  => {
        const { email, password } = req.body;
        if(!email || !password){
          return res.status(400).json({error: "Please fill out all fileds"})
        }
        const existingUser =  await User.findOne({ email });

        if(existingUser && (await bcrypt.compare(password,existingUser.password))){
           res.status(200).cookie("token", generateToken(existingUser._id,existingUser.firstName, existingUser.lastName, existingUser.email )).json(existingUser)
              }
            else{
                return res.status(400).json({error : "Invalid email or password"})
            }
    });


// logout
// api/v1/users/logout
const logoutUser = asyncHandler(async(req,res) => {
  try{
    res.clearCookie("token")
    res.status(200).json({message : "Logged out successfully"})
  }catch(error){
    console.log({error: error.message})
  }
}) 


// get all users 
// get api/v1/users
const getAll = asyncHandler(async (req,res) => {
  try{
    const users = await User.find()
    if(users.length === 0){
      return res.json("Users do not exist")
    }

    res.status(200).json({data : users})
  }catch(error){
    console.log(error)
    return res.status(400).json({error : "Unexpected error occurred"})
  }
})

// delete all users
// deleteAll api/v1/users/
const deleteAll = asyncHandler(async(req,res) => {
  try{
    const response = await User.deleteMany({})
    return res.status(200).json("users deleted succefully")
  }catch(error){
     res.status(500).json("error occured", error.message)
  }
})

// getAuser
// get api/v1/getProfile
const getProfile = asyncHandler (async(req,res) => {
   const {token} = req.cookies
      if(token){
        jwt.verify(token, jwtConfig.secret, {}, (error, user) => {
          if(error) throw error
          res.status(200).json(user)
        })
      }else{
        res.json(null)
      }

})

// jwt configuration
const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expirationTime: process.env.JWT_EXPIRATION,
  refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET
}


// Generate JWT
const generateToken = (id, firstName, lastName, email) => {
    return jwt.sign({ id: id, firstName:firstName, lastName:lastName, email:email}, jwtConfig.secret , { expiresIn: jwtConfig.expirationTime });
  }
  

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    deleteAll,
    getAll,
    getProfile
}