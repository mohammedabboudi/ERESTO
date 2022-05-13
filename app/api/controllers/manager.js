const Meal = require("../models/Meal");
const User = require("../models/User");




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



function listMeal(req, res){

    const id = req.body.id;

    Meal.findOne({_id: id}).then(meal =>{
        res.send(meal);
    }).catch(err =>{
        res.send(err);
    })

}







module.exports = {
    
    addMeal,
    editMeal,
    deleteMeal,
    listMeals,
    listMeal

}