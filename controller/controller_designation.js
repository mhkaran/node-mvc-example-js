const mapping = require('../database/mapping.js');
const repo = require('../database/repository.js');
const staticFunc = require('../common/staticFunc.js')

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

            if (obj.filter==undefined || staticFunc.isJsonEmpty(obj.filter)) throw 'filter should not be empty';

            else if (obj.value==undefined || staticFunc.isJsonEmpty(obj.value)) throw 'value should not be empty';

            return await repo.update(await mapping.blankDesignation(),obj.filter,obj.value);
        }
        catch(e){
            throw e;
        }

    },
    remove : async (condition)=>{

        try{

            if (obj.condition==undefined ||staticFunc.isJsonEmpty(condition)) throw 'condition should not be empty';

            return await repo.deleteOne(await mapping.blankDesignation(),condition);
        }
        catch(e){
            throw e;
        }

    }
}