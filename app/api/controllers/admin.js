const Sector = require("../models/Sector");


function addSector(req, res){


    // res.send(req.body.sector)

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

    addSector,

}