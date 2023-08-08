const mongoose = require('mongoose')

const memoSchema = mongoose.Schema({
	internalno: {
		type: Number
	},
	gcno: {
		type: Number
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
	drivername : {
		type : String
	},
	driverphone: {
		type: Number
	},
	driverwhatsappno: {
		type: Number
	},
	userId: {
		type:String
	},
	
})

module.exports = mongoose.model('memo', memoSchema)
