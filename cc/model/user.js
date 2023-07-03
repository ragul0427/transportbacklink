const mongoose = require('mongoose')

const userSchema = ({
    username: {
        type: String,
        
    },
    password: {
        type:String
    }
})

module.exports=mongoose.model("user",userSchema)