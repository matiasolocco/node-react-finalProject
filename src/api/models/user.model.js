const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'user'],
    }, 
    menu: [{ type: Schema.ObjectId, ref: 'menu'}], 
    food: [{ type: Schema.ObjectId, ref: 'food'}],
   
  },
  {
    collection: 'userApp',
  }
);
const User = mongoose.model('user', userSchema);
module.exports = User;
