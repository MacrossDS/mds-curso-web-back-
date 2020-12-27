const Users = require('../models/Users.model');
const crypto = require("crypto")
const jwt = require("jsonwebtoken")



// exports.insert = (req, res) => {
//     Product.create(req.body, (err, product) => {
        
//         if(err){
//             res.json(200, {msg: err}); 
//         } 
        
//         res.json(200,{msg: "Producto guardado", product});
//     });
// }

exports.login = (req, res) =>{

    // create hahs
    var hash = crypto.createHash('sha512')
    hash.update(req.body.pass)
    var pass = hash.digest('hex')

    Users.findOne({user: req.body.user, pass: pass}, (err, user) =>{
        if(err){
            res.json(200, {msg: err}); 
            throw err
        } 

        jwt.sign({
            user: user.user,
            mail: user.mail,
            id: user._id
        }, process.env.JWT_SECRET, (err, token)=> {
            res.json(200, token);
        })
    })
}