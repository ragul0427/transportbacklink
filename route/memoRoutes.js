const express = require('express')
const router = express.Router();
const {getMemo,createMemo,updateMemo,deleteMemo,}=require('../controllers/Memoentry')


router.get('/',getMemo)
router.post('/',createMemo)
router.put('/:id',updateMemo)
router.delete('/:id',deleteMemo)


module.exports=router