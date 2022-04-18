const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({


    email : {
        
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength :10
        
    },
    password : {

        type : String,
        required : true,
        trim : true,
        minlength :14

    },
    role : {

        type : String,
        default : 'client',
        required : true,
        trim : true,
        maxlength : 14

    },
    phoneNumber : {

        type : Number,
        required : true,
        unique : true,
        trim : true,
        minlength :10
        
    },
    address : {

        type : String,
        required : true,
        trim : true,
        minlength :10
        
    },
    isActive : {

        type : Boolean,
        default : true,
        required : true
        
    },
    sector : {

        type : String,
        default : null,
        minlength :10
        
    }


});


module.exports = mongoose.model('user', userSchema );
