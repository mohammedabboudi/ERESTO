const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({


    name: {

        type: String,
        required: true

    },
    branch:{

        type: Number

    },
    manager:{

        type: String,
        required: true

    },
    location:{

        type: String,
        required: true

    },
    city:{

        type: String,
        required: true

    }


})


module.exports = mongoose.model( 'restaurant', RestaurantSchema );