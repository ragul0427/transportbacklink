const express = require('express')
const router = express.Router();
const {getMemoDetails,createMemoDeatils,updateMemoDetails,deleteMemoDetails}=require("../controllers/Memodetails")


router.get('/',getMemoDetails)
router.post('/',createMemoDeatils)
router.put('/:id',updateMemoDetails)
router.delete('/:id',deleteMemoDetails)


module.exports=router