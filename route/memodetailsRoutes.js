const express = require('express')
const router = express.Router();
const {getMemodetails,createMemodetails,updateMemodetails,deleteMemodetails}=require('../controllers/Memodetails')


router.get('/',getMemodetails)
router.post('/',createMemodetails)
router.put('/:id',updateMemodetails)
router.delete('/:id',deleteMemodetails)


module.exports=router