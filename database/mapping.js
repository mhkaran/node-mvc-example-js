let user = require('../entity/user.js');
let designation = require('../entity/designation.js')
let mongoose = require('mongoose');

module.exports ={

    user : (obj)=>{

        return new Promise((resolve,reject)=>{

            userObj = new user({
                userId : obj.userId,
                firstName : obj.firstName,
                lastName : obj.lastName,
                password : obj.password,
                active : obj.active, 
                isAdmin : obj.isAdmin,
                emailId :  obj.emailId,
                managers : [],
                designation : mongoose.Types.ObjectId(obj.designation)
            });

            if (obj.managers !=null || obj.managers != undefined){

                obj.managers.split(',').forEach(function(manager) {
                    userObj.managers.push(mongoose.Types.ObjectId(manager)) 
                  });
            }
            if (userObj.active == undefined || userObj.active == null) delete userObj.active;
            if (userObj.isAdmin == undefined || userObj.isAdmin == null) delete userObj.isAdmin;
            if (userObj.password == undefined || userObj.password == null) delete userObj.password;

            resolve(userObj);   
        })
    },

    blankUser : ()=>{
        return new Promise((resolve,reject)=>{
             resolve(user);
        })
    },
    
    designation : (obj)=>{

        return new Promise((resolve,reject)=>{
            
            designationObj = new designation({
                name : obj.name,
                active : obj.active
            });

            if (designationObj.active == undefined || designationObj.active == null) delete designationObj.active

            resolve(designationObj);
        });
    },

    blankDesignation : () =>{
        return new Promise((resolve,reject)=>{
            resolve(designation);
        })
    }
}