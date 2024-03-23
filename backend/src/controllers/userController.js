const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')




// register new user
// POST /api/v1/users
const registerUser = asyncHandler(async(req, res) => {
        // grab the data from the request body
        console.log(req.body)
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

        if(password !== confirmPassword){
          return res.status(400).json({error: "Passwords do not match"})
        }
        
        // check if the user is already sign in 
        const userExist = await  User.findOne({ email })
        if(userExist){
            return res.status(400).json({error : "user already exists!"})
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

        // check the user creation operation status 
        if (newUser) {
            res.status(201).json({
              _id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              token: generateToken(newUser._id),
            })
          } else {
            res.status(400).json({error : 'Unexpected error occurred'})
          }
})


// login a user
// POST /api/v1/users/login
const loginUser = asyncHandler(async(req,res)  => {
        const { email, password } = req.body;
        const existingUser =  await User.findOne({ email });
        if(existingUser && (await bcrypt.compare(password,existingUser.password))){
                res.status(200).json({
                    data:{
                        accessToken:generateToken(existingUser._id),
                        user:{
                            _id:existingUser.id,
                            name:existingUser.name,
                            email:existingUser.email,
                            role:existingUser.role

                        }
                    }
                })
              }
            else{
                res.status(400).json({error : "Invalid credentials"})
            }
    });



// get all users 
// get api/v1/users
const getAll = asyncHandler(async (req,res) => {
  try{
    const users = await User.find()
    res.status(200).json({data : users})
  }catch(error){
    console.log(error)
    res.status(400).json({error : "Unexpected error occurred"})
  }
})
    

// jwt configuration
const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expirationTime: process.env.JWT_EXPIRATION,
  refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET
}


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id: id }, jwtConfig.secret , { expiresIn: jwtConfig.expirationTime });
  }
  

module.exports = {
    registerUser,
    loginUser,
    getAll
}