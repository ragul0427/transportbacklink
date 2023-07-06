const mongoose = require('mongoose')

const brokerSchema = mongoose.Schema({

	name: {
		type: String
	},
	userId: {
		type: String
	}
})

module.exports = mongoose.model('broker', brokerSchema)
