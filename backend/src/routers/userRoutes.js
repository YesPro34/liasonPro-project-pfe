const router = require("express").Router()
const userController  = require('../controllers/userController')


// Authentication routes
router.post('/',userController.registerUser)
router.post('/login',userController.loginUser)



module.exports = router