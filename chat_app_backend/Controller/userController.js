const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_KEY=require('../secrets');
const usersModels = require("../Models/usersModels");

//signup
module.exports.createUser = async function createUser(req, res) {
  try {
    let data = req.body;
    let user = await usersModels.create(data);
    if (user) {
      res.json({
        message: "User signed up successfully",
        data: user
      });
    } 
    else {
      res.json({
        message: "No user Found",
      });
    }
  } 
  catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}

//login
module.exports.loginUser = async function loginUser(req,res) {
  try {
    let { email, password } = req.body;
    if (email) {
      let user = await usersModels.findOne({ email: email });
      if (user) {
        const isMatch=await bcrypt.compare(password,user.password);
        if(isMatch){
            let uid = user["_id"];
            let tokens = jwt.sign({ payload: uid }, JWT_KEY);
            res.cookie("login", tokens, { httpOnly: true });
            user.status = "online";
            await user.save();
            res.json({
              message: "User logged in successfully",
              data: user,
            });
        }
        else{
            res.json({
                message:'Password is not matching'
            });
        }
      } 
      else {
        res.json({
          message: "User not found",
        });
      }
    }
    else {
      res.json({
        message: "Email not found",
      });
    }
  } 
  catch (err) {
    res.json({
      message: err.message
    });
  }
}
