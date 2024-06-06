const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodSchema = new Schema(
  {
    name: { type: String, require: true  },
    category: { type: String, require: true },
    description: { type: String, require: true  }
  
    
  },
  {
    collection: 'food',
  }
);
const Food = mongoose.model('food', foodSchema);
module.exports = Food;