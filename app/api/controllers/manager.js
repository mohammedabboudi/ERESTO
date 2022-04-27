const Restaurant = require("../models/Restaurant");
const Meal = require("../models/Meal");
const User = require("../models/User");



function addRestaurant(req, res){


    newRestaurant = new Restaurant();

    newRestaurant.name = req.body.name;
    newRestaurant.branch = req.body.branch;
    newRestaurant.manager = req.body.manager;
    newRestaurant.location = req.body.location;
    newRestaurant.city = req.body.city;
    newRestaurant.owner = req.user.id;


    User.findOne({_id: req.user.id}).then(user =>{

        user.restaurants.push(newRestaurant);
        
        user.save().then(savedUser =>{
        newRestaurant.save().then(savedRestaurant =>{
            res.send(savedRestaurant);
        })
        }).catch(err =>{
            res.send(err);
        })

    })    

}


function editRestaurant(req, res){

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const branch = req.body.branch;
    const manager = req.body.manager;
    const location = req.body.location;
    const city = req.body.city;

    Restaurant.findByIdAndUpdate({_id: id}, {$set: {name: name, description: description, branch: branch, manager: manager, location: location, city: city}}).then(editedUser =>{
        res.send(editedUser);
    }).catch(err =>{
        res.send(err);
    })

}


function deleteRestaurant(req, res){

    const id = req.body.id;

    Restaurant.findByIdAndDelete({_id: id}).then(deletedUser =>{
        res.send(deletedUser);
    }).catch(err =>{
        res.send(err);
    })

}


function addMeal(req, res){


    newMeal = new Meal();

    newMeal.name = req.body.name;
    newMeal.description = req.body.description;
    newMeal.price = req.body.price;
    newMeal.image = req.body.image;
    newMeal.restaurant = req.body.restaurant;
    newMeal.category = req.body.category;

    Restaurant.findOne({_id: req.body.restaurant}).then(restaurant =>{
        restaurant.meals.push(newMeal);
        restaurant.save().then(savedRestaurant =>{
            newMeal.save().then(savedMeal =>{
                res.send(savedMeal);
            })
        })

    }).catch(err =>{
        res.send(err);
    })


}


function editMeal(req, res){

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const restaurant = req.body.restaurant;
    const category = req.body.category;

    Meal.findByIdAndUpdate({_id: id}, {$set: {name: name, description: description, price: price, image: image, restaurant: restaurant, category: category}}).then(editedMeal =>{
        res.send(editedMeal);
    }).catch(err =>{
        res.send(err);
    })

}



function deleteMeal(req,res){

    const mealId = req.body.mealId;
    const restaurantId = req.body.restaurantId;

    Restaurant.findById({_id: restaurantId}).then(restaurant =>{
            let meals = restaurant.meals.filter( value =>{ return value.toString() !== mealId });
            restaurant.meals = meals;
                restaurant.save().then(restaurant =>{
                    Meal.findByIdAndDelete({_id: mealId}).then(deletedMeal =>{
                        res.send(`${deletedMeal} and ${restaurant} `)
                    })
                })
        }).catch(err =>{
            res.send(err);
        })  
}

    

function listMeals(req, res){


    Meal.find().then(meals =>{
        res.send(meals);
    }).catch(err =>{
        res.send(err);
    })

}



function listRestaurants(req,res){

    Restaurant.find().populate('meals').then(restaurants =>{
        res.send(restaurants);
    }).catch(err =>{
        res.send(err);
    })

}



function listrestaurant(req,res){

    const id = req.body.id;

    Restaurant.findOne({_id: id}).populate('meals').then(restaurant =>{
        res.send(restaurant);
    }).catch(err =>{
        res.send(err);
    })

}





module.exports = {
    
    addRestaurant,
    editRestaurant,
    deleteRestaurant,
    addMeal,
    editMeal,
    deleteMeal,
    listRestaurants,
    listrestaurant,
    listMeals

}