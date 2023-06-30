const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const transportRoutes = require('./route/transportRoutes')
const userRoutes = require('./route/userRoute')
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
require("dotenv").config()
app.use('/api/datas', transportRoutes)

app.use('/api/user', userRoutes)


mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	app.listen(process.env.PORT||5000, () => {
		console.log("server listening")
	})
}).catch((err) => {
	console.log(err)
})
