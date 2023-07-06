const User = require('../model/user');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
       
        if (user) {
            if (password === user.password) {
                jwt.sign({ userId: user._id, username }, process.env.SECRET_KEY, {}, (err, token)=> {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ message: 'Internal server error' });
                    } else {
                        res.cookie('token', token).json({
                            id: user._id,
                        });
                    }
                });
            } else {
                res.status(200).json({ message: 'Invalid User' });
            }
        } else {
            res.status(200).json({ message: 'Invalid User' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body,"wdjhjijh")
        const user = await User.findOne({ username: username });

        if (!user) {
            const result = await User.create({ ...req.body });

            jwt.sign({ userId: result._id, username }, process.env.SECRET_KEY, {}, (err, token) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Internal server error' });
                } else {
                    res.cookie('token', token).json({
                        id: result._id,
                        message: 'User registered successfully',
                        token:token
                    });
                }
            });
        } else {
            res.status(409).json({ message: 'User already exists' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    loginUser,
    registerUser,
};
