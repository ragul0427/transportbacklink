const express = require('express')
const router = express.Router();
const {getReport,createReport,updateReport,deleteReport }=require('../controllers/ReportController')


router.get('/',getReport)
router.post('/',createReport)
router.put('/:id',updateReport)
router.delete('/:id',deleteReport)


module.exports=router