const express = require('express')
const router = express.Router();
const {getVehicle,createVehicle,updateVehicle,deleteVehicle}=require('../controllers/Vehicle')


router.get('/',getVehicle)
router.post('/',createVehicle)
router.put('/:id',updateVehicle)
router.delete('/:id',deleteVehicle)


module.exports=router