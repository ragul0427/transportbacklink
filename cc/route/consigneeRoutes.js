const express = require('express')
const router = express.Router();
const {getConsignee,createConsignee,updateConsignee,deleteConsignee}=require('../controllers/Consignee')


router.get('/',getConsignee)
router.post('/',createConsignee)
router.put('/:id',updateConsignee)
router.delete('/:id',deleteConsignee)


module.exports=router