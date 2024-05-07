const mongoose = require('mongoose');
URI='mongodb://localhost:27017/e-com'

const connectdb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connection successful to DB");

    }catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectdb;