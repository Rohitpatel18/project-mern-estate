import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        typeof: 'String',
        required: true,
        undefined: true,
    },
    email:{
        typeof: 'String',
        required: true,
        undefined: true,
    },
    password:{
        typeof: 'string',
        required: true,
       
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
