const express = require('express');
const router = express.Router();
const { loginUser, registerUser, getUser } = require('../controllers/UserController');
const authenticateToken=require('../middleware/Authmiddleware')

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/me', authenticateToken);


module.exports = router;
