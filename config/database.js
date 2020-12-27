const mongoose = require("mongoose")
const colors = require('colors')

// mongo connection
exports.connect = () =>  {
    let port =  process.env.DB_PORT;
    let db =  process.env.DB;
    let host =  process.env.DB_HOST;
    
    mongoose.connect(`mongodb://${host}:${port}/${db}`, {useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('error', (err) => {
        console.error((err).green);
    })
    mongoose.connection.once('open', () => {
        console.log("mongo db is running".yellow);
    })
}
