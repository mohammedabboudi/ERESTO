const Restaurant = require("../models/Restaurant");
const User = require("../models/User");



function addRestaurant(req, res){


    newRestaurant = new Restaurant();

    newRestaurant.name = req.body.name;
    newRestaurant.about = req.body.about;
    newRestaurant.section = req.body.section;
    newRestaurant.location = req.body.location;
    newRestaurant.city = req.body.city;
    newRestaurant.owner = req.user.id;

    Restaurant.findOne({name: req.body.name, section: req.body.section}).then(restaurant =>{

                if (restaurant) {

                    if (restaurant.name == req.body.name && restaurant.section == req.body.section) {

                        res.send(`THIS RESTAURANT AND ITS BRANCH ARE ALREADY EXIST ! YOU CAN ADD A NEW BRANCH`);
                    
                    } else {

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
                
                        
                }else{

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
    })

}



function editRestaurant(req, res){

    const id = req.body.id;
    const about = req.body.about;
    const location = req.body.location;
    const city = req.body.city;

    Restaurant.findOne({_id: id}).then(restaurant =>{

        if (restaurant) {

            Restaurant.findByIdAndUpdate({_id: id}, {$set: {about: about, location: location, city: city}}).then(editedUser =>{
                res.send(editedUser);
            }).catch(err =>{
                res.send(err);
            })

        } else {

            res.send(`NO RESTAURANT FOUND !`);

        }  
    
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
                        if (deletedRestaurant) {
                            res.send(`${deletedRestaurant.name} and ${user.email} `);
                        }else{
                            res.send(`NO RESTAURANT FOUND !`);   
                        }
                        
                    })
                })
        }).catch(err =>{
            res.send(err);
        })  

}



function listRestaurants(req,res){

    Restaurant.find().populate('meals').then(restaurants =>{
        if (restaurants != '' || null) {
            res.send(restaurants);
        } else {
            res.send(`NO RESTAURANT FOUND !`);
        }
    }).catch(err =>{
        res.send(err);
    })

}



function listRestaurant(req,res){

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
    listRestaurant
    

}