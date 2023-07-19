const mongoose = require('mongoose')

const memodetailsSchema = mongoose.Schema({

	locationfrom: {
		type: String
	},
    locationto: {
        type: String
	},
	consignor: {
		type:String
	},
    consignee: {
		type: String
	},
	Lotno: {
		type: String
	},
	prnoform:{
		type: String
	},
	Prnoto: {
		type: String
	},
	quantity: {
		type: String
	},
	lramount: {
		type: Number
	},
	brokername: {
		type: String
	},
    brokercommission: {
        type:Number
    },
    memomethod: {
        type:String
    },
    lorryfreight: {
        type:String
    },
    remarks: {
        type: String
    },
    accountpaid: {
        typr: String
    },
    invoiceno: {
        type: Number
    },
    valueofgoods: {
        type: Number
    },
    quality: {
        type: String
    },
    pressmark: {
        type:String
    },
    userId: {
        type:String
    },
    memoId: {
        type:String,
    }
})

module.exports = mongoose.model('memodetails', memodetailsSchema)