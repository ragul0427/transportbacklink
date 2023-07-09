const express = require('express')
const router = express.Router();
const {getLocation,createLocation,updateLocation,deleteLocation}=require('../controllers/LocationController')


router.get('/',getLocation)
router.post('/',createLocation)
router.put('/:id',updateLocation)
router.delete('/:id',deleteLocation)


module.exports=router