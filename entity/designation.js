var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var refValidator = require('lackey-mongoose-ref-validator');

//Define a schema
var schema = mongoose.Schema;

var designationSchema = new schema({
  name:{type:String, index: true, unique:true, required:[true, 'name is required?']},
  active:{type:Boolean, default:true}
});

designationSchema.plugin(uniqueValidator);
designationSchema.plugin(refValidator,{
  onDeleteRestrict: ['ref']
})

module.exports = mongoose.model('designation', designationSchema, 'designation');