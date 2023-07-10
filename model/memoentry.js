const mongoose = require('mongoose')

const memoSchema = mongoose.Schema({
	internalno: {
		type: Number
	},
	memono: {
		type: String
	},
	drivername: {
		type: String
	},
	date: {
		type: String
	},
	vehicleno: {
		type: String
	},
	driverphone: {
		type: Number
	},
	driverwhatsappno: {
		type: Number
	},
	locationfrom: {
		type: String
	},
    locationto: {
        type: String
	},
	commission: {
		type:String
	},
	userId: {
		type:String
	},
})

module.exports = mongoose.model('memo', memoSchema)
