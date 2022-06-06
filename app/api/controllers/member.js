const { send } = require('express/lib/response');
const User = require('../models/User');




function listMembers(members){

    return (req, res)=>{

        if (req.body.member == '') {
            
            User.find({role: members}).then(members =>{
            res.send(members);

            }).catch(err =>{
                res,send(err);
            })

        } else if(req.body.member != '' && members.includes(req.body.member)){

            User.find({role: req.body.member}).then(members =>{
            res.send(members);

            }).catch(err =>{
                res,send(err);
            })
            
        }else{

            const error = {error:'YOU HAVE THE RIGHT TO ACCESS OR HANDLE JUST THE',members: members};
            res.send(error);
        }

    }
    
}




function listMember(members){

   return (req,res)=>{

    const id = req.body.id

        if (id != '' && null) {
            
            res.send(`YOU SHOULD SET THE USER !`);

        } else {

            User.find({_id: id}).then(member => {

                if (members.includes(member[0].role)) {
                    res.send(member);    
                }else{
                    res.send(`YOU CANNOT ACCESS THIS INFOS`);   
                }

            }).catch(err =>{

                res.send('THIS MEMBER IS NOT EXIST');

            })
            
        }

   }

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

    User.findOneAndUpdate({_id : id}, {$set: {email: email, password: password, role: role, phoneNumber: phoneNumber, address: address}}, {new: true}).then(updatedMember =>{

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
    
    User.findOneAndDelete({ _id: req.body.id }, {new: true}).then(deletedMember =>{
            // res.send(deletedUser); 
            next();
        }).catch(err =>{
            res.send(err);
        });
}




module.exports = {

    addMember,
    deleteMember,
    editMember,
    listMember,
    listMembers

}
