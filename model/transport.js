const mongoose = require('mongoose')

const transportSchema = mongoose.Schema({
    name: {
        type:String,
    },
    age: {
        type:Number
    }
})

module.exports=mongoose.model('transport',transportSchema)
