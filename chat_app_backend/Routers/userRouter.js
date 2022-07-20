const express=require('express');
const userRouter=express.Router();
const {createUser,loginUser}=require('../Controller/userController');

userRouter
.route('/')
.post(createUser)

userRouter
.route('/login')
.post(loginUser)


module.exports=userRouter;