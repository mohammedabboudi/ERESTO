const Restaurant = require("../models/Restaurant");
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

    const restaurantId = req.body.id;
    const userId = req.user.id

    User.findById({_id: userId}).then(user =>{
            let restaurants = user.restaurants.filter( value =>{ return value.toString() !== restaurantId });
            user.restaurants = restaurants;
                user.save().then(user =>{
                    Restaurant.findByIdAndDelete({_id: restaurantId}).then(deletedRestaurant =>{
                        res.send(`${deletedRestaurant} and ${user} `)
                    })
                })
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
    listRestaurants,
    listrestaurant,
    

}