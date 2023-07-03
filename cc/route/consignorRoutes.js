const express = require('express')
const router = express.Router();
const {getConsignor,createConsignor,deleteConsignor,updateConsignor}=require('../controllers/ConsignorController')


router.get('/',getConsignor)
router.post('/',createConsignor)
router.put('/:id',updateConsignor)
router.delete('/:id',deleteConsignor)


module.exports=router