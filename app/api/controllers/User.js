const User = require('../models/User');


function userSelect(req, res){

    User.find({}).then(users =>{

        res.send(users);

    }).catch(err =>{

        res.send(err);

    });

}


function userRegister(req, res, next){


    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.role = req.body.role;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.address = req.body.address;

    newUser.save().then(savedUser =>{

         req.user = savedUser;
         next();

    }).catch(err =>{

        if (err.keyPattern.email) {
            
            res.send(`Please try another email, this one ${err.keyValue.email} is already exist`);

        }
        else if(err.keyPattern.phoneNumber){

            res.send(`Please try another phone number, this one : ${err.keyValue.phoneNumber} is already exist`);

        }    

    })

}


function userEdit(req, res){


    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;

    User.findOneAndUpdate({_id : id}, {$set: {email: email, password: password, role: role, phoneNumber: phoneNumber, address: address}}).then(updatedUser =>{

        res.send(updatedUser);

    }).catch(err =>{

        if (err.keyPattern.email) {
            
            res.send(`Please try another email, this one ${err.keyValue.email} is already exist`);

        }
        else if(err.keyPattern.phoneNumber){

            res.send(`Please try another phone number, this one : ${err.keyValue.phoneNumber} is already exist`);

        }    

    })

}


function userDelete(req, res){
    
    User.findOneAndDelete({ _id: req.body.id}).then(deletedUser =>{
        res.send(deletedUser);
        console.log(`THE USER DELETED SUCCESSFULY...`)
    }).catch(err =>{
        res.send(err);
    });
}



module.exports = {

    userSelect,
    userRegister,
    userEdit,
    userDelete

}