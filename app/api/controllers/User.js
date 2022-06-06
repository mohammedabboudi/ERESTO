const User = require('../models/User');


function listUsers(req, res){

    User.find({role: 'client'}).then(users =>{

        res.send(users);

    }).catch(err =>{

        res.send(err);

    });

}



function listUser(req, res){

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
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;

    User.findOneAndUpdate({_id : id}, {$set: {email: email, password: password, phoneNumber: phoneNumber, address: address}}, {new: true}).then(updatedUser =>{

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
    
User.findOneAndDelete({ _id: req.user.id }, {new: true}).then(deletedUser =>{
        // res.send(deletedUser); 
        next();
    }).catch(err =>{
        res.send(err);
    });
}




function changeStatus(req, res){

    const id = req.body.id;
    const blocked = req.body.blocked;

    User.findByIdAndUpdate({_id: id}, {$set: {blocked : blocked}}, {new: true}).then(user =>{
        res.send(user);
    }).catch(err =>{
        res.send(err);
    })

}




module.exports = {

    listUsers,
    listUser,
    createAccount,
    editAccount,
    deleteAccount,
    changeStatus

}