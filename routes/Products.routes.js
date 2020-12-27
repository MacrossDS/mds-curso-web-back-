const express = require("express");
const router = express.Router();
const ProductsController = require('../controllers/Products.controller'); 

router.get('/products', ProductsController.getData);
router.post('/products', ProductsController.insert);

module.exports = router;



    // export. router.post('/data', (req, res) =>{
    //     res.status(200);
    //     console.log(req.body);
    //     res.json(req.body);
    // });

