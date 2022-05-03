const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;



const roleSchema = new Schema({

    name: {
        type: String,
        reauired: true,
        trim: true,
        unique : true
        
    },
    creatures: [{
        type: String,
        default: null,
        trim: true
    }]

})


module.exports = mongoose.model('role', roleSchema);