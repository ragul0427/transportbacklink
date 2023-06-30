const express = require('express')
const router = express.Router();
const {getTransport,createTransport,deleteTransport,updateTransport}=require('../controllers/TransportController')


router.get('/',getTransport)
router.post('/',createTransport)
router.put('/',deleteTransport)
router.delete('/',updateTransport)


module.exports=router