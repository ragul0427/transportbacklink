const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const consignorRoutes = require('./route/consignorRoutes')
const userRoutes = require('./route/userRoute')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser');
const consigneeRoutes = require('./route/consigneeRoutes')
const vehicleRoutes=require('./route/vehicleRoutes')
const brokerRoutes=require('./route/brokerRoutes')


app.use(express.json());

app.use(bodyparser.json())
app.use(express.urlencoded({
	extended: false
}));
require("dotenv").config()



app.use(cors({
	origin: 'http://localhost:3000', 
	credentials: true, 
	
}));

app.use('/api/broker',brokerRoutes,)
app.use('/api/consignor',consignorRoutes, )
app.use('/api/consignee',consigneeRoutes, )
app.use('/api/vehicle',vehicleRoutes, )
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
	const token = req.cookies.token;
	console.log(token);
	res.send('Hello World!');
});



app.use(cookieParser());


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
