const Role = require("../models/Role");
const Sector = require("../models/Sector");
const User = require("../models/User");



function addRole(req, res){

    newRole = new Role();

    newRole.role = req.body.role;

    newRole.save().then(savedRole =>{
        res.send(savedRole);
    }).catch(err =>{
        if(err.keyPattern.role == 1){
            res.send(`${err.keyValue.role} is already exist`);
        }
    })

}

function addCreature(){

    const role_id = req.role_id;

    Role.findByIdAndUpdate({id: role_id}, {$set: {creatures: creatures}}).then(updatedRole =>{
        res.send(updatedRole);
    }).catch(err =>{
        res.send(err);
    })

}


function addSector(req, res){

    newSector = new Sector();

    newSector.sector = req.body.sector;

    newSector.save().then(savedSector =>{

        res.send(savedSector);

    }).catch(err =>{

        if(err.keyPattern.sector == 1){
        res.send(`${err.keyValue.sector} is already exist`);
        }
    })

}


function addUser(req, res){

    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.role = req.body.role;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.address = req.body.address;
    newUser.sector = req.body.sector;

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


function changeStatus(req, res){

    const id = req.body.id;
    const blocked = req.body.blocked;

    User.findByIdAndUpdate({_id: id}, {$set: {blocked : blocked}}).then(user =>{

        res.send(user);
    }).catch(err =>{

        res.send(err);
    })

}



module.exports = {

    addRole,
    addSector,
    addUser,
    changeStatus

}