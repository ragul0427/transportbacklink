const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({

	fromdate: {
		type: String
	},
    todate: {
       type: String 
    },
    vehicle : {
       type: String
    },
    locationfrom : {
         type: String
    },
    locationto : {
        type: String
    },
    consignor: {
        type: String
    },
    consignee : {
        type: String
    },
    brokername : {
         type: String
    },
    lrno: {
        type: String
    },
    userId: {
        type:String
    }
})

module.exports = mongoose.model('report', reportSchema)
