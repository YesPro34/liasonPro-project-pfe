const router = require("express").Router()
const userController  = require('../controllers/userController')
const serviceProviderController  = require('../controllers/serviceProviderController')


// Authentication routes
router.post('/',userController.registerUser)
router.post('/login',userController.loginUser)
router.get("/",userController.getAll)
router.delete("/",userController.deleteAll)
router.get("/profile",userController.getProfile)
router.post("/logout",userController.logoutUser)




// service Provider routes
router.delete('/:id',serviceProviderController.deleteUser)
router.get("/serviceProviders",serviceProviderController.getAllServiceProviders)



module.exports = router