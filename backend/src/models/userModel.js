const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        lastName : {
            type: String,
            required:[true]
        },
        firstName:{
            type:String,
            required:[true]
        },
        email:{
            type: String,
            required:[true],
            unique:true
        },
        password:{
            type: String,
            required:[true],
            unique:true
        },
        address:{
            type:String,
            required:[false]
        },
        phoneNumber:{
            type:String,
            required:[false],
        },
        gender:{
            type:String,
            required:[false]
        },
        role:{
            type:String,
            required:[true]
        },
        service :{
            type:String,
            required:[false]
        },
        experience:{
            type:String,
            required:[false]
        },
        city:{
            type:String,
            required:[false]
        },
        certification :{
            type:String,
            required: [false]
        },
        description :{
            type:String,
            required:[false]
        },

    },
        {
            timestamps:true,
        }



)


module.exports = mongoose.model('user', userSchema)