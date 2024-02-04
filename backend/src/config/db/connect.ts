import mongoose from 'mongoose';

export const connectDB = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url);
    console.log('Database is connected');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Database connection error');
  }
};
