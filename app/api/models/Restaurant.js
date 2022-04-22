const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({


    name: {

        type: String,
        required: true

    },
    about:{

        type: String,
        // required: true   

    },
    branch:{

        type: Number

    },
    owner: {

        type: Schema.Types.ObjectId,
        ref: 'user'

    },
    // meals: [{

    //     type: Schema.Types.ObjectId,
    //     ref: 'meal'

    // }],
    location:{

        type: String,
        required: true

    },
    city:{

        type: String,
        required: true

    }



});
RestaurantSchema.virtual("meals",{
    ref: "meal",
    localField: "_id",
    foreignField: "restaurantId"
})


module.exports = mongoose.model( 'restaurant', RestaurantSchema );