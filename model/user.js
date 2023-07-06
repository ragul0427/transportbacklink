const mongoose = require('mongoose')

const userSchema = ({
    username: {
        type: String,
        
    },
    password: {
        type:String
    },
    userId: {
        type:String
    }
})

module.exports=mongoose.model("user",userSchema)