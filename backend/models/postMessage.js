import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    description:String,
    titleColor:String,
    comments:[String],

    createdAt:{
        type:Date,
        default: new Date()
    },

})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;