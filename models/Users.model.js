const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    user: {type: String, required: true, max: 80},
    mail: {type: String, max: 255},
    pass: {type: String, max: 128}
});

module.exports = mongoose.model("users", UserSchema); 