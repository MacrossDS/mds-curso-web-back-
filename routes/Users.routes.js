const express = require("express");
const router = express.Router();
const UsersController = require('../controllers/Users.controller'); 

router.post('/login', UsersController.login);
// router.post('/products', UsersController.insert);

module.exports = router;



    // export. router.post('/data', (req, res) =>{
    //     res.status(200);
    //     console.log(req.body);
    //     res.json(req.body);
    // });

