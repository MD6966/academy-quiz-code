const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true,
    },
    cnic: {
        type: Number,
        required: true
    },
    regId: {
        type: Number,
        required: true
    },
    corseType: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   quizmarks : {
    type: Number,
    required: true
},
typingmarks : {
    type: Number,
    required: true
},
oralmarks : {
    type: Number,
    required: true
},
})

const users = new mongoose.model("users", UserSchema)

module.exports = users