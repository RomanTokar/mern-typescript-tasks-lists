import express from 'express';
import config from 'config';
import mongoose from 'mongoose';

const app = express();
const port: number = parseInt(config.get('port'));
const mongoURI: string = config.get('mongoURI');

async function start() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(port, () => {
      console.log(`App has been started on ${port} port.`);
    });
  } catch (e) {
    console.log(`Server Error - ${e.message}`);
    process.exit(1);
  }
}

start();