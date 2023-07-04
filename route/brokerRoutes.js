const express = require('express')
const router = express.Router();
const {getBroker,createBroker,updateBroker,deleteBroker}=require('../controllers/BrokerController')


router.get('/',getBroker)
router.post('/',createBroker)
router.put('/:id',updateBroker)
router.delete('/:id',deleteBroker)


module.exports=router