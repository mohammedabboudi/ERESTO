const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({

    name: {

        type: String,
        required: true

    },
    description: {

        type: String,
        required: true

    },
    price: {

        type: Number,
        required: true

    },
    image: {

        type: String,
        required: true

    },
    restaurant: {

        type: Schema.Types.ObjectId,
        ref: 'restaurants'

    },
    category: {

        type: String,
        required: true

    }

})


module.exports = mongoose.model('meals', MealSchema);