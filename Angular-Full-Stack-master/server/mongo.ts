import * as mongoose from 'mongoose-latest';

async function setMongo(): Promise<any> {
  let mongodbURI;
  if (process.env.NODE_ENV === 'test') {
    mongodbURI = process.env.MONGODB_TEST_URI;
  } else {
    mongodbURI = process.env.MONGODB_URI;
  }
  console.log(mongodbURI);
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);
  // Connect to MongoDB using Mongoose
  await mongoose.connect(mongodbURI);
  console.log('Connected to MongoDB');
}

export default setMongo;
