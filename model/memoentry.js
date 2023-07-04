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
	driverwhatsappnumber: {
		type: Number
	},
	locationfrom: {
		type: Number
	},
    locationto: {
        type: String
	},
	commission: {
		type:String
	}
})

module.exports = mongoose.model('memo', memoSchema)
