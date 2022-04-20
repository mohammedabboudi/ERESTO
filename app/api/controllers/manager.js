const Restaurant = require("../models/Restaurant");



function addRestaurant(req, res){

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


function editRestaurant(req, res){

    const id = req.body.id;
    const name = req.body.name;
    const branch = req.body.branch;
    const manager = req.body.manager;
    const location = req.body.location;
    const city = req.body.city;

    Restaurant.findByIdAndUpdate({_id: id}, {$set: {name: name, branch: branch, manager: manager, location: location, city: city}}).then(editedUser =>{
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




module.exports = {
    
    addRestaurant,
    editRestaurant,
    deleteRestaurant

}