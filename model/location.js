const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({

	 locationname : {
		type: String
	},
	userId: {
		type: String
	}
})

module.exports = mongoose.model('location', locationSchema)
