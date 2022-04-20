const Restaurant = require("../models/Restaurant");



function addMeal(req, res){

    // res.send(`hello from the manager route...`);

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




module.exports = {
    
    addMeal

}