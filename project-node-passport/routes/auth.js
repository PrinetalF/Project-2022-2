const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/register', (req, res) =>{
    console.log(req.body);
    res.redirect('/');
});

router.post('/login', (req, res) =>{
    const {username, password} = req.body
    
    const user = await User.findOne({
        username,
        password
    })

    if(user) {
        return res.render('index',{user})
    }
    else{
        return res.render('login',{message: 'Email or Password incorrect'})
    }
})

