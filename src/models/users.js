const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    First_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    mobile : {
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
});

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;