const Role = require("../models/Role");
const Sector = require("../models/Sector");
const User = require("../models/User");



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





module.exports = {

    addSector

}