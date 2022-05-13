const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;



const roleSchema = new Schema({

    role: {
        type: String,
        reauired: true,
        unique : true,
        trim: true
        
    },
    creatures: [{
        type: String,
        default: null,
        trim: true
    }]

})


module.exports = mongoose.model('role', roleSchema);