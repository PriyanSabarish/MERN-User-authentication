const User = require('../Models/UserModels');
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens
const expirey = 3*24*60*60;

exports.register = async (req, res) => {
    try {
        console.log(req);
        const { email, password } = req.body;
        console.log(email,password);
        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            email,
            password : hashedPassword
        });
        await user.save();
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your coochie is my secret key', { expiresIn: '365d' });

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            expirey: expirey * 1000,
          });

        res.status(201).json({
            message: 'User created successfully!',
            token
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
};



module.exports.login = async (req,res,next) => {

        try{
            console.log(req)
            const { email, password } = req.body;
            Console.log(email,password);
            const user = await User.login(email, password);
            const token = jwt.sign({ userId: user._id }, 'your coochie is my secret key', { expiresIn: '365d' });

        res.cookie("jwt", token, {
            httpOnly: false,
            expirey: expirey * 1000,
          });

        res.status(200).json({
            user: user._id, status: true 
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }


}