const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const sectorSchema = new Schema({

    sector:{

        type: Schema.Types.ObjectId,
        ref: 'restaurants',
        required: true

    }


})


module.exports = mongoose.model('sectors', sectorSchema);