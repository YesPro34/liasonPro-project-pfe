const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// delete a user
// POST /api/v1/users/_id
const deleteUser = asyncHandler(async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findOneAndDelete({ _id: userId });
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      } 
      res.status(200).json({ message: `User with ID: ${userId} deleted successfully`, deletedUser });
    } catch (error) {
      console.error(error);
      console.log(error)
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

const getAllServiceProviders = asyncHandler(async(req,res) => {
  try{
    const serviceProviders = await User.find({role:"lawyer"})
    res.status(200).json({data: serviceProviders})
  }catch(error){
    // console.log("error occured", error.message)
    res.status(400).json("error occured", error.message)
  }
})


  module.exports ={ 
    deleteUser,
    getAllServiceProviders
  }