const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const consignorRoutes = require('./route/consignorRoutes')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser');
const consigneeRoutes = require('./route/consigneeRoutes')
const vehicleRoutes=require('./route/vehicleRoutes')
const brokerRoutes=require('./route/brokerRoutes')
const reportRoutes=require('./route/reportRoutes')
const locationRoutes=require('./route/locationRoutes') 
const memodetailsRoutes = require('./route/memodetailsRoutes')
const memoentryroutes=require('./route/memoRoutes')

app.use(express.json());

app.use(bodyparser.json())
app.use(express.urlencoded({
	extended: false
}));
require("dotenv").config()



app.use(cors({
	origin: 'http://localhost:3000', 
	credentials: true, 
	methods:['GET','POST','PUT','DELETE']
	
}));
app.use('/api/memodetails', memodetailsRoutes)
app.use('/api/memo', memoentryroutes)
app.use('/api/location',locationRoutes)
app.use('/api/report',reportRoutes )
app.use('/api/broker',brokerRoutes,)
app.use('/api/consignor',consignorRoutes, )
app.use('/api/consignee',consigneeRoutes, )
app.use('/api/vehicle',vehicleRoutes, )






app.use(cookieParser());


mongoose.connect("mongodb+srv://JaiBalajiRoadways:jYNvRRewrPKe2iTv@cluster0.4brtux9.mongodb.net/transport", {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	app.listen(process.env.PORT||5000, () => {
		console.log("server listening")
	})
}).catch((err) => {
	console.log(err)
})
