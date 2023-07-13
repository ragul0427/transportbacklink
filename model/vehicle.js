const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({

	docentry: {
		type: Number
	},
	vehicleno: {
		type: String
	},
	drivername: {
		type: String
	},
	driverphone: {
		type: Number
	},
	whatsappno: {
		type: Number
	},
	pan: {
		type: String
	},
	rcname: {
		type: String
	},
	accno: {
		type: Number
	},
    ifsccode: {
        type: String
	},
	userId: {
		type:String
	}
})

module.exports = mongoose.model('vehicle', vehicleSchema)
