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

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        lowercase:true,
        index:true,
        validate:[isEmail,'Invalid Email']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    newMessage:{
        type:Object,
        default:{}
    },
    status:{
        type:String,
        default:'Online'
    }
},{minimize:false});

UserSchema.pre('save',async function(){
        let salt=await bcrypt.genSalt();
        let hashedString=await bcrypt.hash(this.password,salt);
        //console.log(hashedString);
        this.password=hashedString;
});


const usersModels=mongoose.model('usersModels',UserSchema);

module.exports=usersModels;

