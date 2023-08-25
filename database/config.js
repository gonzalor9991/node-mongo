const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB online');
    } catch (error) {
        console.log(process.env.MONGODB_CNN);
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
};



module.exports = {
    dbConnection
}