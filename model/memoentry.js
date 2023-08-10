const mongoose = require('mongoose')

const memoSchema = mongoose.Schema({
	internalno: {
		type: String
	},
	gcno: {
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
	drivername : {
		type : String
	},
	driverphone: {
		type: String
	},
	driverwhatsappno: {
		type: String
	},
	userId: {
		type:String
	},
	
})

module.exports = mongoose.model('memo', memoSchema)
