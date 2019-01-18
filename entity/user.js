var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

//Define a schema
var schema = mongoose.Schema;

var userSchema = new schema({
  userId: { type: String, unique:true, required: [true, "userId is required?"] },
  firstName: { type: String, required: [true, "first Name is required?"] },
  lastName: { type: String, required: [true, "last Name is required?"] },
  password: {
    type: String,
    required: [true, "password is required?"],
    default: "Travelex@123"
  },
  active: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
  emailId: {
    type: String, 
    unique:true,
    required: [true, "emailId is required?"],
    validate: {
      validator: function(v) {
        return (/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/).test(v);
      },
      message: "Email is invalid"
    }
  },
  managers: [{ type: schema.Types.ObjectId, ref: "user" }],
  designation: {
    type: schema.Types.ObjectId,
    ref: "designation",
    required: [true, "designation is required?"]
  },
  createdDate:{ type: Date,default:Date.now}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("user", userSchema, "user");
