import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
       
    },
    avatar:{
        type: String,
        default:"https://mydbsync.com/sites/default/files/video_thumb_CW.png"
    },
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;
