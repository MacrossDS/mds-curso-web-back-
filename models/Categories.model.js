const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
    name: {type: String, required: true, max: 80},
    desc: {type: String, max: 255},
});

module.exports = mongoose.model("categories", CategoriesSchema); 