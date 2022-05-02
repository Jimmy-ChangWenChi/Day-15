var express = require('express');
const { route } = require('../app');
var router = express.Router();
const Product = require("../models/products");


router.get("/", function(req,res,next){
    console.log(req.query);
    const q = req.query

    res.status(200).json({
        status:"success",
        data:{
            "category":q.category,
            "page":q.page
        }
    })
})



module.exports = router;