const { send } = require('express/lib/response');
const User = require('../models/User');




function listMembers(req, res){

    User.find({}).then(users =>{

        res.send(users);

    }).catch(err =>{

        res.send(err);

    });

}



function listMember(req, res){

    const id = req.body.id

    User.find({_id: id}).then(user =>{

        res.send(user);

    }).catch(err =>{

        res.send(err);

    });

}



function addMember(req, res){

    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.role = req.body.role;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.address = req.body.address;

    newUser.save().then(userSaved=>{
        res.send(userSaved);
    }).catch(err =>{

        if (err.keyPattern.email) {
            
            res.send(`Please try another email, this one ${err.keyValue.email} is already exist`);

        }
        else if(err.keyPattern.phoneNumber){

            res.send(`Please try another phone number, this one : ${err.keyValue.phoneNumber} is already exist`);

        }    

    })

}

    


function editMember(req, res){


    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;

    User.findOneAndUpdate({_id : id}, {$set: {email: email, password: password, role: role, phoneNumber: phoneNumber, address: address}}).then(updatedMember =>{

        res.send(updatedMember);

    }).catch(err =>{

        if (err.keyPattern.email) {
            
            res.send(`Please try another email, this one ${err.keyValue.email} is already exist`);

        }
        else if(err.keyPattern.phoneNumber){

            res.send(`Please try another phone number, this one : ${err.keyValue.phoneNumber} is already exist`);

        }    

    })

}



function deleteMember(req, res, next){
    
    User.findOneAndDelete({ _id: req.body.id }).then(deletedMember =>{
            // res.send(deletedUser); 
            next();
        }).catch(err =>{
            res.send(err);
        });
}



function listMember(members){

    return (req, res)=>{

        res.send('hello ...')

    }

}


function listMembers(members){

    return (req, res)=>{

        res.send('hello ...')

    }

}


module.exports = {

    addMember,
    deleteMember,
    editMember,
    listMember,
    listMembers

}
