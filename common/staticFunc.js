module.exports = {

    isJsonEmpty: (obj)=>{
        
        if (Object.keys(obj).length>0)
            return false

        return true;    
    }
}