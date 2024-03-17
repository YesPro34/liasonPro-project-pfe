const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')




// register new user
// POST /api/users
const registerUser = asyncHandler(async(req, res) => {
        // grab the data from the request body
        console.log(req.body)
        const {
            name,
            email,
            password,
            role
        } = req.body;

        // check fields 
        if(!name || !email || !password || !role){
            res.status(400).json({error:"Please add all fields"})
        }
        
        // check if the user is already sign in 
        const userExist = await  User.findOne({ email })
        if(userExist){
            res.status(400).json({error : "user already exists!"})
        }

        // Hash password
        const salt = await bcrypt.genSalt(10) // add an extra data to the user password
        const hashedPassword = await bcrypt.hash(password, salt) // merge the hashed pass to the salt
 
        // create new User
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
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
// POST /api/users/login
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
// const getUser = asyncHandler(async(req,res) => {
//     const {email, password} = req.body

// })


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
    loginUser
}