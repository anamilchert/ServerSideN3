const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Servico', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1); // encerra a aplicação caso a conexão não seja bem sucedida
    }
};

module.exports = connectDB;