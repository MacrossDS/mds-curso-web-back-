const express = require("express");
const router = express.Router();
const CategoriesController = require('../controllers/Categories.controller'); 

router.get('/categories', CategoriesController.getData);
// router.post('/products', CategoriesController.insert);

module.exports = router;



    // export. router.post('/data', (req, res) =>{
    //     res.status(200);
    //     console.log(req.body);
    //     res.json(req.body);
    // });

