const express=require('express');
const userRouter=express.Router();
const {createUser,loginUser, logoutUser}=require('../Controller/userController');

userRouter
.route('/')
.post(createUser)

userRouter
.route('/login')
.post(loginUser)

userRouter
.route('/logout')
.get(logoutUser)

module.exports=userRouter;