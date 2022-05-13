const User = require('../models/User');


function listUsers(req, res){

    User.find({}).then(users =>{

        res.send(users);

    }).catch(err =>{

        res.send(err);

    });

}

function userSelection(req, res){

    const id = req.body.id

    User.find({_id: id}).then(user =>{

        res.send(user);

    }).catch(err =>{

        res.send(err);

    });

}


function createAccount(req, res, next){

    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;
    // newUser.role = req.body.role; // should not be here
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

        console.log('there is an error')

    })

}


function editAccount(req, res){


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


function deleteAccount(req, res, next){
    
User.findOneAndDelete({ _id: req.user.id }).then(deletedUser =>{
        // res.send(deletedUser); 
        next();
    }).catch(err =>{
        res.send(err);
    });
}



module.exports = {

    listUsers,
    userSelection,
    createAccount,
    editAccount,
    deleteAccount
}