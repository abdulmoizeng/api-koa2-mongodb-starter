import envs from '../project-env';
import winston from 'winston';
import mongoose from './index';

export function connect() {
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
  console.error(`Database connection error ${err}`);
});

instance.once('open', (d) => {
  console.log(`Connected to database: ${instance.db.databaseName}`);
});

export default instance;
