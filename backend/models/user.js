import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:String,
    fullName:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default: new Date()
    },

})

var User = mongoose.model('User', userSchema);

export default User;