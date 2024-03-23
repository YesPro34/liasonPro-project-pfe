const router = require("express").Router()
const userController  = require('../controllers/userController')
const serviceProviderController  = require('../controllers/serviceProviderController')


// Authentication routes
router.post('/',userController.registerUser)
router.post('/login',userController.loginUser)
router.get("/",userController.getAll)




// service Provider routes
router.delete('/:id',serviceProviderController.deleteUser)



module.exports = router