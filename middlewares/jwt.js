const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    let token = req.headers.authorization.split(" ")[1] 

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            res.sendStatus(401)
            return;
        }

        next();

    })

}