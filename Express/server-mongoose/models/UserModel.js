const mongoose=require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    phone: {
        type: Number,
        required:true,
        unique:true
    },
    password: {
        type: Number
        //required:true,
    },
    address: {
        type: string,
        //required:true,
    },
})

const Users=mongoose.model("Users", UsersSchema)

module.exports = mongoose