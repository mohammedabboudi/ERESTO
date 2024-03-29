const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({


    name: {

        type: String,
        required: true

    },
    about:{

        type: String,
        required: true

    },
    section:{

        type: Number

    },
    owner: {

        type: Schema.Types.ObjectId,
        ref: 'users'

    },
    meals: [{

        type: Schema.Types.ObjectId,
        ref: 'meals'

    }],
    location:{

        type: String,
        required: true

    },
    city:{

        type: String,
        required: true

    },
    approved:{

        type: String,
        default: false,
        required:true

    }



});



// RestaurantSchema.virtual("meals",{
//     ref: "meal",
//     localField: "_id",
//     foreignField: "restaurantId"
// })


module.exports = mongoose.model( 'restaurants', RestaurantSchema );