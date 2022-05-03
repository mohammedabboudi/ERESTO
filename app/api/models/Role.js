const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;



const roleSchema = new Schema({

    name: {
        type: String,
        reauired: true
    },
    creatures: [{
        type: String
    }]

})


module.exports = mongoose.model('role', roleSchema);