const mapping = require('../database/mapping.js');
const repo = require('../database/repository.js');
const appConst = require('../common/applicationConstant.js')

module.exports ={

    list : async (obj)=>{
        
        try{
            return await repo.fetch(await mapping.blankDesignation(),obj.filter,obj.value,[]);
        }
        catch(e){
            throw e;
        }

    },
    add : async  (obj)=>{

        try{
            return await repo.save(await mapping.designation(obj));
        }
        catch(e){
            throw e;
        }

    },
    update : async (obj)=>{
        
        try{
            return await repo.update(await mapping.blankDesignation(),obj.filter,obj.value);
        }
        catch(e){
            throw e;
        }

    },
    delete : async (condition)=>{

        try{
            return await repo.deleteOne(await mapping.blankDesignation(),condition);
        }
        catch(e){
            throw e;
        }

    }
}