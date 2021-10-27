const mongoose = require("mongoose");
const jwt =  require('jsonwebtoken');
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
userSchema.methods.generateAuthToken = async (id) => {
  const token = jwt.sign({id: id}, process.env.SECRET)
  return token;
}
const User = mongoose.model('User',userSchema);
module.exports = User;