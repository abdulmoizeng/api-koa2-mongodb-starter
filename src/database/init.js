import envs from '../project-env';
import winston from 'winston';
import mongoose from './index';

export function init() {
  // Set up default mongoose connection
  // No need to `await` on this, mongoose 4 handles connection buffering internally
  mongoose.connect(envs.MONGODB, { useMongoClient: true });
  if (process.env.resetdb) {
    mongoose.connection.dropDatabase();
    winston.info('All data has been reset');
  }
}

// Get the default connection
const instance = mongoose.connection;

instance.on('error', (err) => {
  console.error(`mongodb connection error ${err}`);
});

instance.once('open', () => {
  console.log('connected to database.');
});

export default instance;
