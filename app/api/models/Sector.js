const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const sectorSchema = new Schema({

    sector:{
        type: String,
        required: true,
        unique: true,
        minlength: 6
    }

})


module.exports = mongoose.model('sector', sectorSchema);