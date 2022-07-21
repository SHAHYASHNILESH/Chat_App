const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const validator=require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

const db_link='mongodb+srv://admin:RSZHek7KCmdYYSPn@cluster0.ptf4r.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link)
.then(function(db){
    console.log('Database connected successfully');
})
.catch(function(err){
    console.log(err);
})

const MessageSchema=mongoose.Schema({
    content:String,
    from:Object,
    socketid:String,
    time:String,
    date:String,
    to:String
});

const MessageModel=mongoose.model('MessageModel',MessageSchema);
module.exports=MessageModel;