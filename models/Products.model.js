const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    name: {type: String, required: true, max: 80},
    price: Number,
    desc: {type: String, max: 255},
    categories: [
        {type: Schema.Types.ObjectId, ref: "categories"}
    ]
});

module.exports = mongoose.model("products", ProductsSchema); 