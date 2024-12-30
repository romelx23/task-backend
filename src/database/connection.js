const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      
    });
    console.log('Database online');
  } catch (error) {
    console.error(error);
    throw new Error('Error starting the database');
  }
};

module.exports = {
  dbConnection
}
