module.exports = {

    save : (model)=>{
        
        return new Promise((resolve,reject)=>{
            model.save(
                (err)=>{
                    if (err){
                        var errMsg = '';
                        Object.keys(err.errors).forEach((element)=>{
                            errMsg += err.errors[element].message + '\r\n';
                        })
                        reject(errMsg);
                    }
                    resolve();
                }
            )    
        })
    },
    
    update : (model,condition,updatedValues)=>{
        
            return new Promise((resolve,reject)=>{
                model.updateMany(condition, updatedValues, {new: true}, (err,raw)=>{
                        if (err) reject(err);
                        else resolve();

                })
            })
    },

    fetch : (model,condition,params,populate)=>{

        return new Promise((resolve,reject)=>{
            model = model.find(condition,params);
            populate.forEach((value)=>{
                model.populate(value.split(',')[0],value.split(',')[1]);
              }); 

              model.exec((err,data)=>{
                if (err) reject(err);
                else resolve(data);
            })
        })
    },
    
    fetchById : (model,id,params,populate) => {
        return new Promise((resolve,reject)=>{
            model = model.findById(id,params);
            populate.forEach((value)=>{
                model.populate(value.split(',')[0],value.split(',')[1]);
              }); 

              model.exec((err,data)=>{
                if (err) reject(err);
                else resolve(data);
            })
        })
    },

    fetchOne : (model,condition,params,populate)=>{

        return new Promise((resolve,reject)=>{
            model = model.findOne(condition,params);
            populate.forEach((value)=>{
                model.populate(value);
              }); 

            model.exec((err,data)=>{
                if (err) reject(err);
                else resolve(data);
            })
        })
    },

    delete : (model,condition)=>{
        return new Promise((resolve,reject)=>{
            model.deleteMany(condition,(err)=>{
                if (err) reject(err)
                else resolve();
            })
        })
    },

    deleteOne : (model,condition)=>{

        return new Promise((resolve,reject)=>{
            model.findOneAndDelete(condition,(err)=>{
                if (err) reject(err)
                else resolve();
            })
        })
    },

    deleteById : (model,id)=>{
             
        return new Promise((resolve,reject)=>{
            model.findOneAndDelete(id,(err)=>{
                if(err) reject(err)
                else resolve()
            })
        })
    }
}