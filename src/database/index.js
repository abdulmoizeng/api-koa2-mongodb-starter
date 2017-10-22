import bluebird from 'bluebird';
import mongoose from 'mongoose';

// TODO: remove this redundant bit of code
// use bluebird as default promise library
mongoose.Promise = bluebird;

export default mongoose;
