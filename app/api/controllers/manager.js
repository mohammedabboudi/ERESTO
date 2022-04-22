const Restaurant = require("../models/Restaurant");
const Meal = require("../models/Meal");



function addRestaurant(req, res){


    newRestaurant = new Restaurant();

    newRestaurant.name = req.body.name;
    newRestaurant.branch = req.body.branch;
    newRestaurant.manager = req.body.manager;
    newRestaurant.location = req.body.location;
    newRestaurant.city = req.body.city;

    newRestaurant.save().then(savedRestaurant =>{
        res.send(savedRestaurant);
    }).catch(err =>{
        res.send(err);
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
    newMeal.restaurantId=req.body.restaurantId;

    newMeal.save().then(savedMeal =>{
        res.send(savedMeal);
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

    const id = req.body.id;

    Meal.findByIdAndDelete({_id: id}).then(deletedMeal =>{
        res.send(deletedMeal);
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

    Restaurant.find().then(restaurants =>{
        res.send(restaurants);
    }).catch(err =>{
        res.send(err);
    })

}



function restaurant(req,res){

    const id = req.body.id;

    Restaurant.findOne({_id: id}).then(restaurant =>{
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
    restaurant,
    listMeals

}