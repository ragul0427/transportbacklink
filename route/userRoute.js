const express = require('express');
const router = express.Router();
const { loginUser, registerUser, getUser } = require('../controllers/UserController');
const authenticateToken=require('../middleware/Authmiddleware')

router.post('/login',authenticateToken, loginUser);
router.post('/register',authenticateToken, registerUser);
router.get('/me', authenticateToken);


module.exports = router;
