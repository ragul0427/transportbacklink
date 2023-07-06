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
	lotno: {
		type: String
	},
	prnofrom: {
		type: String
	},
	prnoto: {
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
        type:String
    },
    memomethod: {
        type:String
    },
    lorryfoeight: {
        type:string
    },
    remarks: {
        type: String
    },
    accountpaid: {
        typr: String
    },
    invoiceno: {
        type: String
    },
    valueofgoods: {
        type: String
    },
    quality: {
        type: String
    },
    pressmark: {
        type:String
    },
    userId: {
        type:String
    }
})

module.exports = mongoose.model('memodetails', memodetailsSchema)