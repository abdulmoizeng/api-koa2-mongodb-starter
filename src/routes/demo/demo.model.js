// grab the things we need
import mongoose from '../../database';

// create a schema
const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// The schema is useless so far, we need to create a model using it
const Demo = mongoose.model('Demo', demoSchema);

// make this available to our users in our Node applications
export default Demo;
