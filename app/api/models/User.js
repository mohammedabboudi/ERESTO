const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({


    email : {
        
        type : String,
        required : true,
        unique : true,
        minlength :10
    },
    password : {

        type : String,
        required : true,
        minlength :14

    },
    role : {

        type : String,
        default : 'client',
        required : true,
        maxlength : 14

    },
    phoneNumber : {

        type : Number,
        required : true,
        unique : true,
        minlength :10
        
    },
    address : {

        type : String,
        required : true,
        minlength :10
        
    },
    isActive : {

        type : Boolean,
        default : true,
        required : true
        
    }
    

});


module.exports = userSchema;