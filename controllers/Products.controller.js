const Product = require('../models/Products.model');

exports.insert = (req, res) => {
    Product.create(req.body, (err, product) => {
        
        if(err){
            res.json(200, {msg: err}); 
        } 
        
        res.json(200,{msg: "Producto guardado", product});
    });
}

exports.getData = (req, res) =>{
    Product.find().populate("categories").exec((err, products) =>{
        if(err){
            res.json(200, {msg: err}); 
            throw err
        } 

        res.json(200, products);
    })
}