const mapping = require('../database/mapping.js');
const repo = require('../database/repository.js');
const appConst = require('../common/applicationConstant.js')
const mongoose = require('mongoose');

module.exports ={

    list : async (obj)=>{
        
        try{
            return await repo.fetch(await mapping.blankUser(),obj.filter,obj.value,[appConst.entity.designation]);
        }
        catch(e){
            throw e;
        }

    },
    add : async  (obj)=>{

        try{
            return await repo.save(await mapping.user(obj));
        }
        catch(e){
            throw e;
        }

    },
    update : async (obj)=>{
        
        try{
            return await repo.update(await mapping.blankUser(),obj.filter,obj.value);
        }
        catch(e){
            throw e;
        }

    },
    delete : async (condition)=>{
        try{
            return await repo.delete(await mapping.blankUser(),condition);
        }
        catch(e){
            throw e;
        }

    }
}