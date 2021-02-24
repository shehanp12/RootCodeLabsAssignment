import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
export const signup = async (req, res) => {
    if ((!req.body.username) || (!req.body.password)) {
        res.json({success: false, msg: 'Enter all fields'})
    } else {

        const emailExist = await User.findOne({email: req.body.email});
        if (emailExist) return res.json({success: false, msg: 'Email is already exits'});

        // Hash Passwords
        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({

            username: req.body.username,
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashPassword
        })


        user.save(function (err, user) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            } else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
}

export const login = async (req,res) => {

    if ((!req.body.email) || (!req.body.password)) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else{

        const  user = await User.findOne({email:req.body.email});
        if(!user) return  res.json({success: false, msg: 'Email is not found'}) ;

        //Password is incorrect
        const validPass = await  bcrypt.compare(req.body.password,user.password);
        if(!validPass) return  res.json({success: false, msg: 'Password is incorrect'}) ;

        // res.send('Logged In')

        // Create and assign web tokens
        const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
        res.json({success: true, token: token,msg:'User has successfully login'})

    }

}
