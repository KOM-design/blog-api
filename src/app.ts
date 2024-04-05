// src/app.ts
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/postRoutes'; // Import postRoutes
import { Mongoose } from 'mongoose';
import { ConnectOptions, connect } from "mongoose"

const app = express();
export default app

app.use(bodyParser.json());
app.use('/api', postRoutes); // Use postRoutes for '/api' endpoints

const MONGODB_URI = 'mongodb://localhost:27017/blog-api';

mongoose
  .connect(MONGODB_URI, {
    // Use the new connection options
    // useFindAndModify: false, // For deprecation warning
    useNewUrlParser: true, // Use the new URL string parser
    useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
  } as ConnectOptions)
  // Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', (error as Error).message);
  });
